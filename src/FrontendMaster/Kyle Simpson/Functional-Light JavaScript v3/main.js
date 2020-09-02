function flip(f) {
  return function flipped(a, b, ...args) {
    return f(b, a, ...args)
  }
}

function f(...args) {
  return args
}

var g = flip(f)
let ret = g(1, 2, 3, 4)
console.log(ret);
