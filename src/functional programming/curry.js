function identity(x) {
  return x
}

var identity = function identity(x) {
  return x
}
function add(first, second) {
  return first + second
}

function sub(first, second) {
  return first - second
}

function mul(first, second) {
  return first * second
}

function identityf(x) {
  return function () {
    return x
  }
}

function addf(first) {
  return function (second) {
    return first + second
  }
}

function liftf(binary) {
  return function (first) {
    return function (second) {
      return binary(first, second)
    }
  }
}
function curry(binary, first) {
  return function (second) {
    return binary(first, second)
  }
}

function curry(binary, first) {
  return liftf(binary)(first)
}

function curry(func) {
  let slice = Array.prototype.slice,
      args = slice.call(arguments, 1)
  return function () {
    return func.apply(null, args.concat(slice.call(arguments, 0)))
  }
}

function curry(func, ...first) {
  return function (...second) {
    return func(...first, ...second)
  }
}

function twice(binary) {
  return function (a) {
    return binary(a, a)
  }
}
function from(start) {
  return function () {
    var next = start
    start += 1
    return next
  }
}

function to(gen, end) {
  return function () {
    var value = gen()
    if (value < end) {
      return value
    }
    return undefined
  }
}
var index = to(from(1), 3)

console.log(index());
console.log(index());
console.log(index());
