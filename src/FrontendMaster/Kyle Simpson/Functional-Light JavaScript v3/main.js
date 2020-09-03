const {curry, ramda} = require('ramda')
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

function countVowels(str, count = v => v) {
  var first = (isVoewl(str[0]) ? 1 : 0)
  if (str.length <= 1) return count(first)
  return countVowels(str.slice(1), function (v) {
    return count(v + first)
  })
}

var outer = 1
function f() {
  console.log(outer)
  var outer = outer + 1
  return outer
}

let res = f()
console.log(res)


// function compose(...fns) {
//   return function f(x) {
//     return fns.reduceRight((acc, fn) => fn(acc), x)
//   }
// }
