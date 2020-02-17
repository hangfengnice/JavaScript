// var curry = function (fn) {
//   var args = [].slice.call(arguments, 1)
//   return function () {
//     return fn.apply(this, args.concat([].slice.call(arguments)))
//   }
// }

// function add(a, b) {
//   return a + b
// }
// var addCurry = curry(add, 1 , 2)
// console.log(addCurry());

// var addCurry1 = curry(add, 1)
// console.log(addCurry(2));

// var addCurry2 = curry(add)
// console.log(addCurry(1, 2));

// function sub_curry(fn) {
//   var args = [].slice.call(arguments, 1)
//   return function () {
//     return fn.apply(this, args.concat([].slice.call(arguments)))
//   }
// }

// function curry(fn, length) {
//   length = length || fn.length
//   var slice = Array.prototype.slice
//   return function() {
//     if (arguments.length < length) {
//       var combined = [fn].concat(slice.call(arguments))
//       return curry(sub_curry.apply(this, combined), length - arguments.length)
//     } else {
//       return fn.apply(this, arguments)
//     }
//   }
// }

// var fn = curry(function (a, b, c) {
//   return [a, b, c]
// })

// console.log(fn('a', 'b', 'c'));

// function sub_curry(fn) {
//   return function () {
//     return fn()
//   }
// }
// function curry(fn, length) {
//   length = length || 4
//   return function () {
//     if (length > 1) {
//       return curry(sub_curry(fn), -- length)
//     } else {
//       return fn()
//     }
//   }
// }

// var fn0 = function () {
//   console.log(1);
// }

// var fn1 = curry(fn0);

// fn1()()()()

function curry(fn, args, holes) {
  length = fn.length;
  args = args || []
  holes = holes || []
  debugger
  return function () {
    var _args = args.slice(0),
        _holes = holes.slice(0),
        argsLen = args.length,
        holesLen = holes.length,
        arg, i, index = 0;
    for (var i = 0; i < arguments.length; i ++) {
      arg = arguments[i]
      if (arg === _ && holesLen) {
        index ++
        if(index > holesLen) {
          _args.push(arg)
          _holes.push(argsLen - 1 + index - holesLen)
        }
      } else if (arg === _) {
        _args.push(arg)
        _holes.push(argsLen + i)
      } else if (holesLen) {
        if (index >= holesLen) {
          _args.push(arg)
        } else {
          _args.splice(_holes[index], 1, arg)
          _holes.splice(index, 1)
        }
      } else {
        _args.push(arg)
      }
    }
    if (_holes.length || _args.length < length) {
      return curry.call(this, fn, _args, _holes)
    } else {
      return fn.apply(this, _args)
    }
  }
}

var _ = {};

var fn = curry(function(a, b, c, d, e) {
    console.log([a, b, c, d, e]);
});

// 验证 输出全部都是 [1, 2, 3, 4, 5]
// fn(1, 2, 3, 4, 5);
// fn(_, 2, 3, 4, 5)(1);
// fn(1, _, 3, 4, 5)(2);
// fn(1, _, 3)(_, 4)(2)(5);
// fn(1, _, _, 4)(_, 3)(2)(5);
fn(_, 2)(_, _, 4)(1)(3)(5)
