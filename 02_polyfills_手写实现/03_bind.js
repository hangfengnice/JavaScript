/**
 * 手写 Function.prototype.bind
 * 特性：
 * 1. 返回一个新函数，this 永久绑定到指定 context
 * 2. 支持预置参数（部分应用）
 * 3. 绑定函数可作为构造函数使用（new 调用时忽略 context）
 * 4. 继承原函数原型链
 */
Function.prototype.bind = function (context, ...boundArgs) {
  // 保存原函数引用
  const fn = this

  // 处理 context，与 call/apply 保持一致
  if (context === null || context === undefined) {
    context = globalThis
  } else {
    context = Object(context)
  }

  const bound = function (...callArgs) {
    // new.target: new 调用时指向构造函数，否则为 undefined
    // new 调用时忽略绑定的 context，让 this 指向新实例
    if (new.target) {
      return new fn(...boundArgs, ...callArgs)
    }
    // 普通调用：绑定 context，合并预置参数和调用参数
    return fn.call(context, ...boundArgs, ...callArgs)
  }

  // 原型链继承：让绑定函数实例能访问原函数原型
  // 使用 Object.create 避免直接修改原函数原型
  bound.prototype = Object.create(fn.prototype)

  return bound
}
