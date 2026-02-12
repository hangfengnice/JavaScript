/**
 * 数组扁平化 - 递归实现
 * @param {Array} arr - 需要扁平化的数组
 * @param {number} [depth=1] - 扁平化深度，默认为 1 层
 * @returns {Array} 扁平化后的新数组
 *
 * @example
 * flatten([1, [2, [3, 4]]])           // [1, 2, [3, 4]]
 * flatten([1, [2, [3, 4]]], 2)        // [1, 2, 3, 4]
 * flatten([1, [2, [3, 4]]], Infinity) // [1, 2, 3, 4]
 */
function flatten(arr, depth = 1) {
  if (depth === 0) {
    return arr.slice()
  }

  return arr.reduce((result, item) => {
    if (Array.isArray(item)) {
      // 递归展开子数组，深度减 1
      result.push(...flatten(item, depth - 1))
    } else {
      result.push(item)
    }
    return result
  }, [])
}

/**
 * 数组扁平化 - 迭代实现（使用栈）
 * 适用于深度嵌套的数组，避免递归栈溢出
 *
 * @param {Array} arr - 需要扁平化的数组
 * @returns {Array} 完全扁平化后的新数组
 *
 * @example
 * flattenIterative([1, [2, [3, [4, 5]]]])  // [1, 2, 3, 4, 5]
 */
function flattenIterative(arr) {
  const result = []
  const stack = [...arr]

  while (stack.length) {
    const item = stack.pop()

    if (Array.isArray(item)) {
      // 将数组元素压回栈中（逆序，保持原顺序）
      stack.push(...item)
    } else {
      // 非数组元素，添加到结果开头（因为是 pop 出来的）
      result.unshift(item)
    }
  }

  return result
}

/**
 * 数组扁平化 - 迭代实现优化版
 * 通过正序遍历避免 unshift 的性能问题
 *
 * @param {Array} arr - 需要扁平化的数组
 * @returns {Array} 完全扁平化后的新数组
 */
function flattenIterativeOptimized(arr) {
  const result = []
  const stack = [...arr].reverse() // 先反转，后续 pop 就是正序

  while (stack.length) {
    const item = stack.pop()

    if (Array.isArray(item)) {
      // 反转后压栈，保持原顺序
      stack.push(...item.slice().reverse())
    } else {
      result.push(item)
    }
  }

  return result
}

/**
 * 数组扁平化 - 使用生成器实现
 * 懒加载，适合处理大型数组或流式场景
 *
 * @param {Array} arr - 需要扁平化的数组
 * @param {number} [depth=Infinity] - 扁平化深度
 * @yields {*} 扁平化后的元素
 *
 * @example
 * const gen = flattenGenerator([1, [2, [3, 4]]])
 * [...gen]  // [1, 2, 3, 4]
 */
function* flattenGenerator(arr, depth = Infinity) {
  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      yield* flattenGenerator(item, depth - 1)
    } else {
      yield item
    }
  }
}

/**
 * 数组扁平化 - toString 技巧实现
 * ⚠️ 注意：仅适用于数字/字符串数组，会丢失类型信息
 *
 * @param {Array} arr - 需要扁平化的数组
 * @returns {Array} 扁平化后的数组（元素会转为数字）
 *
 * @example
 * flattenByToString([1, [2, [3, 4]]])  // [1, 2, 3, 4]
 */
function flattenByToString(arr) {
  return arr
    .toString()
    .split(',')
    .map((item) => Number(item))
}

// ============ 使用示例 ============

// 1. 基础用法
const arr1 = [1, [2, [3, [4, 5]]]]
console.log(flatten(arr1)) // [1, 2, [3, [4, 5]]]
console.log(flatten(arr1, 2)) // [1, 2, 3, [4, 5]]
console.log(flatten(arr1, Infinity)) // [1, 2, 3, 4, 5]

// 2. 迭代实现
const arr2 = [1, [2, [3, [4, 5]]]]
console.log(flattenIterative(arr2)) // [1, 2, 3, 4, 5]
console.log(flattenIterativeOptimized(arr2)) // [1, 2, 3, 4, 5]

// 3. 生成器实现
const arr3 = [1, [2, [3, 4]]]
console.log([...flattenGenerator(arr3)]) // [1, 2, 3, 4]
console.log([...flattenGenerator(arr3, 1)]) // [1, 2, [3, 4]]

// 4. 原生方法对比
const arr4 = [1, [2, [3, [4, 5]]]]
console.log(arr4.flat()) // [1, 2, [3, [4, 5]]]
console.log(arr4.flat(2)) // [1, 2, 3, [4, 5]]
console.log(arr4.flat(Infinity)) // [1, 2, 3, 4, 5]
