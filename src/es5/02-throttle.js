var container = document.getElementById('container')
var button = document.getElementById('btn')
var count = 1
function getUsetAction() {
  container.innerHTML = count ++
}
// function throttle(func, wait) {
//   var context, args
//   var previous = 0
//   return function () {
//     var now = +new Date()
//     context = this
//     args = arguments
//     if (now - previous > wait) {
//       func.apply(context, args)
//       previous = now
//     }
//   }

// }

function throttle(func, wait, options) {
  var timeout, context, args, result
  var previous = 0
  if (!options) options = {}

  var later = function () {
    previous = +new Date()
    timeout = null
    func.apply(context, args)
  }
  var throttled = function () {
    var now = +new Date()
    var remaing = wait - (now - previous)
    args = arguments
    context = this
    if (remaing <= 0 || remaing > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context, args)
    } else if(!timeout) {
      timeout = setTimeout(later, wait)
    }
  }
  return throttled
}

container.onmousemove = throttle(getUsetAction, 2000)
