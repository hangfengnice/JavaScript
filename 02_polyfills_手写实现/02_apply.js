/**
 * 手写 Function.prototype.apply
 * 与 call 的区别：第二个参数是数组或类数组
 */
Function.prototype.apply = function (context, args) {
  // 处理 null 和 undefined - 绑定到全局对象
  if (context === null || context === undefined) {
    context = globalThis
  } else {
    // 原始值需要装箱
    context = Object(context)
  }

  // args 为 null 或 undefined 时当作空数组处理
  args = args ?? []

  const fn = Symbol('fn') // 使用 Symbol 避免属性名冲突
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn] // 清理临时属性
  return result
}
