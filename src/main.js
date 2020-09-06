const { setIn } = require("immutable");



function log(x) {
  console.log(x);
}


function addAsync(x, y, cb) {
  setTimeout(() => {
    cb(x + y)
  }, )
}

// var thunk = function (cb) {
//   addAsync(10, 15, cb)
// }




var thunk = makeThunk(addAsync, 10, 15)


function makeThunk(fn) {
  var args = [].slice.call(arguments, 1)
  return function (cb) {
    args.push(cb)
    fn.apply(null, args)
  }
}

thunk(function (sum) {
  console.log(sum);
})


log(Array(5).join('wat  1' - 1) + 'hello')
