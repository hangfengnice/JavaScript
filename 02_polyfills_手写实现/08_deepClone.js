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
  const clonedRoot = {}

  // 栈结构：存储待处理的节点信息
  const taskStack = [
    {
      parentClone: clonedRoot,
      propertyKey: undefined,
      originalValue: source,
    },
  ]

  while (taskStack.length) {
    const { parentClone, propertyKey, originalValue } = taskStack.pop()

    // 确定当前克隆的目标位置
    let currentClone = parentClone
    if (typeof propertyKey !== 'undefined') {
      currentClone = parentClone[propertyKey] = {}
    }

    // 遍历原对象的所有自有属性
    for (let key in originalValue) {
      if (originalValue.hasOwnProperty(key)) {
        const propertyValue = originalValue[key]

        if (typeof propertyValue === 'object' && propertyValue !== null) {
          // 对象/数组类型：压入栈，稍后处理
          taskStack.push({
            parentClone: currentClone,
            propertyKey: key,
            originalValue: propertyValue,
          })
        } else {
          // 基本类型：直接复制
          currentClone[key] = propertyValue
        }
      }
    }
  }

  return clonedRoot
}

/**
 * 处理循环引用的深度克隆
 * @param {object} source - 要克隆的对象
 * @returns {object} 深拷贝后的对象
 */
function deepCloneWithCircular(source) {
  // 使用 Map 记录原对象 → 克隆对象的映射，查找复杂度 O(1)
  const cloneCache = new Map()

  const clonedRoot = {}

  const taskStack = [
    {
      parentClone: clonedRoot,
      propertyKey: undefined,
      originalValue: source,
    },
  ]

  while (taskStack.length) {
    const { parentClone, propertyKey, originalValue } = taskStack.pop()

    // 先检查循环引用：如果已克隆过，直接复用
    if (cloneCache.has(originalValue)) {
      parentClone[propertyKey] = cloneCache.get(originalValue)
      continue
    }

    // 确定当前克隆的目标位置
    let currentClone = parentClone
    if (typeof propertyKey !== 'undefined') {
      currentClone = parentClone[propertyKey] = {}
    }

    // 记录已克隆的对象，避免循环引用导致无限循环
    cloneCache.set(originalValue, currentClone)

    // 遍历所有自有属性
    for (let key in originalValue) {
      if (originalValue.hasOwnProperty(key)) {
        const propertyValue = originalValue[key]

        if (typeof propertyValue === 'object' && propertyValue !== null) {
          taskStack.push({
            parentClone: currentClone,
            propertyKey: key,
            originalValue: propertyValue,
          })
        } else {
          currentClone[key] = propertyValue
        }
      }
    }
  }

  return clonedRoot
}
