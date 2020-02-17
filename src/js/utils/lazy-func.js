var t
function foo() {
  if (t) return t
  t = new Date()
  return t
}
console.log(foo());
console.log(foo());

// 惰性函数
// 修改原函数
var a = function () {
  var t = new Date()
  a = function () {
    return t
  }
  return a()
}


