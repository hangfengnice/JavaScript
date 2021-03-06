Function.prototype.myApply = function (context, ...args) {
  context = context || window
  let fn = Symbol('fn')
  context[fn] = this
  let res = context[fn](...args)
  delete context[fn]
  return res
}