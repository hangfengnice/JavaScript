Function.prototype.apply2 = function (context, arr) {
  context = context || window
  context.fn = this
  let ret
  if (!arr) {
    ret = context.fn()
  } else {
    ret = context.fn(...arr)
  }
  delete context.fn
  return ret
}
