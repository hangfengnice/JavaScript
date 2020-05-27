// function curry (fn, args) {
//   var length = fn.length
//   args = args || []
//   return function () {
//     var _args = args.slice(0),
//       arg, i;
//     for (var i = 0; i < arguments.length; i ++) {
//       arg = arguments[i]
//       _args.push(arg)
//     }
//     if (_args.length < ) {}
//   }

// }

let curry = (fn) =>
  judge = (...args) =>
  args.length >= fn.length ?
  fn(...args) :
  (...args1) => judge(...args, ...args1)

function partial(fn) {
   var args = [].slice.call(arguments, 1)
   return function () {
     var position = 0, len = args.length
     for (var i = 0; i < arguments.length; i ++) {
       args[i] = args[i] === _ ? arguments[position ++] : args[i]
     }
     while(position < arguments.length) args.push(arguments[position ++])
     return fn.apply(this, args)
   }

}

var foo = function () {
  var t = new Date()
  foo = function () {
    return t
  }
  return foo()
}
