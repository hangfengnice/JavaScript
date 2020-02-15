Function.prototype.apply1 = function (context, args) {
  context = context || window
  context.fn = this
  let ret;
  if (!args) {
    ret =  context.fn()
  } else {
    ret = context.fn(...args)
  }
  delete context.fn
  return ret
}
let value = 1;
let obj = {
  value : 2
}
function test (a, b) {
  console.log(this.value + a + b);
}
test.apply1(obj, [1, 3])