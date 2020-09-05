const {curry, ramda, reduce} = require('ramda')
// const {reduce, map} = require('lodash')
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
// console.log(res)


// function compose(...fns) {
//   return function f(x) {
//     return fns.reduceRight((acc, fn) => fn(acc), x)
//   }
// }

function Just (val) {
  return {map, chain, ap}
  function map(fn) {
    return Just(fn(val))
  }
  function chain(fn) {
    return fn(val)
  }
  function ap(anotherMonad) {
    return anotherMonad.map(val)
  }
}

var fo = Just(41)
var ft = fo.map(function (v) {
  return v + 1
})

var identity = v => v

let a1 = fo.chain(identity)
let a2 = ft.chain(identity)

console.log(a1, a2);

var user1 = Just('Kyel')
var user2 = Just('Susan')

var tuple = curry(function (x, y) {
  return [x, y]
})
var users = user1.map(tuple).ap(user2).chain(identity)
console.log(users);
// const reduce = function (list, cb, initial) {
//   let memo = initial

//   for(let i = 0; i < list.length; i ++) {
//     if (i == 0 && memo === undefined) {
//       memo = list[0]
//     } else {
//       memo = cb(list[i], memo)
//     }
//   }
//   return memo
// }
// let result = reduce([1, 2,3], (a, b) => a + b, 1)
// console.log(result);

const findsomeone = () => {
  const speak = () => console.log(who);
  let who = 'hf1'
  return speak
}
let someone = findsomeone()
someone()


function test() {
  console.log('helo')
}

let funcobj = String(test)
let other = !funcobj
console.log(funcobj);
