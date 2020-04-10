var foo = function () {
  var t = new Date()
  foo = function () {
    return t
  }
  return foo()
}
// console.log(foo());
// console.log(foo());
// console.log(foo());
// console.log(foo());
