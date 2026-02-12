/**
 * 获取值的精确类型
 * @param {*} value - 任意值
 * @returns {string} 类型小写，如 'null'、'array'、'object' 等
 * @example
 * getType(null)        // 'null'
 * getType([])          // 'array'
 * getType({})          // 'object'
 * getType(() => {})    // 'function'
 */
function getType(value) {
  if (value == null) {
    return value + ''
  }
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}
