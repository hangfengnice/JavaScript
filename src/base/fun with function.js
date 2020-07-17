function identity(x) {
  return x
}

function add(x, y) {
  return x + y
}

function sub(x, y) {
  return x - y
}

function mul(x, y) {
  return x * y
}

function identityf(x) {
  return function () {
    return x
  }
}
function addf(a) {
  return function (b) {
    return a + b
  }
}
function liftf(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b)
    }
  }
}
function curry(fn, a) {
  return function (b) {
    return fn(a, b)
  }
}

function curry(fn) {
  var slice = Array.prototype.slice,
    args = slice.call(arguments, 1)
  return function() {
    return fn.apply(null, args.concat(slice.call(arguments, 0)))
  }
}
function twice(fn) {
  return function (a) {
    return fn(a, a)
  }
}
function reverse(fn) {
  return function (...args) {
    return fn(...args.reverse())
  }
}
function compose(...fns) {
  return function (x) {
    return fns.reduceRight((cur, f) => f(cur), x)
  }
}
function square(x) {
  return x * x
}
function double(x) {
  return 2 * x
}

function limit(binary, count) {
  return function (a, b) {
    if (count >= 1) {
      count -= 1
      return binary(a, b)
    }
    return undefined
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
    return value
  }
}
function fromto(start, end) {
  return to(from(start), end)
}

function element(array, gen) {
  if (gen === undefined) {
    gen = fromto(0, array.length)
  }
  return function () {
    var index = gen()
    if (index !== undefined) {
      return array[index]
    }
  }
}
function collect(gen, array) {
  return function () {
    var value = gen()
    if (value !== undefined) {
      array.push(value)
    }
    return value
  }
}
// var con = concat(formto(0, 3), formto(0, 2))
// function concat(...gens) {
//   var next = element(gens),
//   gen = next()

// }
// let ret = liftf(add)(1)(2)
let ret1 = compose(square, double)(3)
console.log(ret1);
