function flip(f) {
  return function flipped(a, b, ...args) {
    return f(b, a, ...args)
  }
}

function f(...args) {
  return args
}

var g = flip(f)
// let ret = g(1, 2, 3, 4) // [2, 1, 3, 4]
// console.log(ret);

var add = x => x + 1
var double = x => x * 2
var subtract = x => x - 2

function compose(...fns) {
  // code below
  return function (x) {
    return fns.reduceRight((acc, fn) => fn(acc), x)
  }
}
var f = compose(add, double, subtract)
let ret = f(3) // 3
console.log(ret);
