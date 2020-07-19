const {Map}  = require('immutable')

function curry (fn) {
  let arity = fn.length
  return function $curry(...args) {
    return args.length >= arity ? fn(...args) : $curry.bind(null, ...args)
  }
}

const add = (x, y) => x + y
let addC = curry(add)
console.log(addC(1, 3));

function funcky(x) {
  x = null
}
let x = []
funcky(x)

console.log(x)
