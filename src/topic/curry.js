// var curry = function (fn) {
//   var args = [].slice.call(arguments, 1)

//   return function () {
//     var newArgs = args.concat([].slice.call(arguments))
//     return fn.apply(this, newArgs)
//   }
// }

function sub_curry(fn) {
  var args = [].slice.call(arguments, 1)
  return function () {
    return fn.apply(this, args.concat([].slice.call(arguments)))
  }
}

function curry(fn, length) {

  length = length || fn.length
  console.log(length);
  var slice = Array.prototype.slice
  return function () {
    if (arguments.length < length) {
      var combined = [fn].concat(slice.call(arguments))
      return curry(sub_curry.apply(this, combined), length - arguments.length)
    } else {
      return fn.apply(this, arguments)
    }
  }
}


// let curry = (fn) => judge = (...args) => args.length >= fn.length ? fn(...args) : (arg) => judge(...args, arg)


function curry (fn, args) {
  let length = fn.length
  console.log(length);
  args = args || []
  return function () {
    var _args = args.slice(0);
    _args.push(...arguments)

    if (_args.length >= length) {
      return fn(..._args)
    } else {
      return curry.call(this, fn, _args)
    }

  }
}

// var fn = curry(function (a, b, c) {
//   console.log(a, b, c);
// })
// fn('a')('b', 'c')
