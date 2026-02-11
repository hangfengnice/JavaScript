/**
 * 创建指定深度和广度的嵌套对象
 * @param {number} depth - 嵌套深度
 * @param {number} breadth - 每层宽度（属性数量）
 * @returns {object} 嵌套结构：{ data: { data: { ... } } }
 *
 * @example
 * createNestedObject(2, 3)
 * // {
 * //   data: {
 * //     0: 0, 1: 1, 2: 2,
 * //     data: {
 * //       0: 0, 1: 1, 2: 2
 * //     }
 * //   }
 * // }
 */
function createNestedObject(depth, breadth) {
  const root = {}
  let current = root

  for (let i = 0; i < depth; i++) {
    const level = {}
    current.data = level
    current = level

    for (let j = 0; j < breadth; j++) {
      current[j] = j
    }
  }

  return root
}

/**
 * 使用栈（迭代方式）进行深度克隆，避免递归栈溢出
 * @param {object} source - 要克隆的对象
 * @returns {object} 深拷贝后的对象
 */
function deepCloneIterative(source) {
  const root = {}

  // 栈结构：存储待处理的节点
  const stack = [
    {
      parent: root,
      key: undefined,
      value: source,
    },
  ]

  while (stack.length) {
    const { parent, key, value } = stack.pop()

    // 确定当前克隆目标的位置
    let cloneTarget = parent
    if (typeof key !== 'undefined') {
      cloneTarget = parent[key] = {}
    }

    // 遍历当前对象的所有属性
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        const item = value[key]

        if (typeof item === 'object' && item !== null) {
          // 对象类型：压入栈，后续处理
          stack.push({
            parent: cloneTarget,
            key: key,
            value: item,
          })
        } else {
          // 基本类型：直接赋值
          cloneTarget[key] = item
        }
      }
    }
  }

  return root
}

/**
 * 处理循环引用的深度克隆
 * @param {object} source - 要克隆的对象
 * @returns {object} 深拷贝后的对象
 */
function deepCloneWithCircular(source) {
  // 用 Map 替代数组，查找从 O(n) → O(1)
  const clonedMap = new Map() // source → target

  const root = {}

  const stack = [
    {
      parent: root,
      key: undefined,
      value: source,
    },
  ]

  while (stack.length) {
    const { parent, key, value } = stack.pop()

    // 先检查循环引用：已拷贝则复用，跳过对象创建
    if (clonedMap.has(value)) {
      parent[key] = clonedMap.get(value)
      continue
    }

    // 确定克隆目标位置
    let cloneTarget = parent
    if (typeof key !== 'undefined') {
      cloneTarget = parent[key] = {}
    }

    // 记录已拷贝的对象
    clonedMap.set(value, cloneTarget)

    // 遍历属性
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        const item = value[key]

        if (typeof item === 'object' && item !== null) {
          stack.push({
            parent: cloneTarget,
            key: key,
            value: item,
          })
        } else {
          cloneTarget[key] = item
        }
      }
    }
  }

  return root
}
