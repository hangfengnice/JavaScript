function partial(fn) {
  var args = [].slice.call(arguments, 1)
  return function () {
    var newArgs = args.concat([].slice.call(arguments))
    return fn.apply(this, newArgs)
  }
}


var _ = {}
function partial(fn) {
  var args = [].slice.call(arguments, 1)
  return function () {
    var position = 0, len = args.length
    for (var i = 0; i < len; i ++) {
      args[i] = args[i] === _ ? arguments[position ++] : args[i]
    }
    while(position < arguments.length) args.push(arguments[position ++])
    return fn.apply(this, args)
  }
}

var subtract = function (a, b) {return b - a}

subFrom20 = partial(subtract, _, 20)

// console.log(subFrom20(5));

var _ = {}

function partial (fn) {
  var args = [].slice.call(arguments, 1)
  return function () {
    var position = 0, len = args.length
    for (var i = 0; i < len; i ++) {
      args[i] = args[i] == _ ? arguments[position ++] : args[i]

      while(position < arguments.length) args.push(arguments[position ++])
    }
    return fn.apply(this, args)
  }
}
