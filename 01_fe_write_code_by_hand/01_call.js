/**
 * 手写 Function.prototype.call
 * 改进点：
 * 1. null/undefined 绑定到全局对象（使用 globalThis 兼容多环境）
 * 2. 原始值（0/''/false）通过 Object() 装箱，而非错误地绑定到 window
 */
Function.prototype.call = function (context, ...args) {
  // 处理 null 和 undefined - 绑定到全局对象
  if (context === null || context === undefined) {
    context = globalThis // globalThis 是标准全局对象（浏览器=window, Node.js=global）
  } else {
    // 原始值需要装箱
    // Object(1) -> Number{1}, Object('foo') -> String{'foo'}
    context = Object(context)
  }

  const fn = Symbol('fn') // 使用 Symbol 避免属性名冲突
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn] // 清理临时属性
  return result
}
