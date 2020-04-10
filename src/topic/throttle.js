var count = 1
var container = document.getElementById('container')

function getUserAction(e) {
  // console.log(e);
  container.innerHTML = count ++
}
var setUseAction = throttle(getUserAction, 3000, {trailing: false})
// container.onmousemove = getUserAction
container.onmousemove = setUseAction

document.getElementById('btn').addEventListener('click', function () {
  setUseAction.cancel()
})

// 时间戳
function throttle(func, wait) {
  var context, args
  var previous = 0
  return function () {
    var now = +new Date()
    context = this
    args = arguments
    if (now - previous > wait) {
      func.apply(context, args)
      previous = now
    }
  }
}

// 定时器
function throttle(func, wait) {
  var timeout, args
  var previous = 0
  return function () {
    context = this
    args = arguments

    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null
        func.apply(context, args)
      }, wait)
    }
  }
}

// 双剑合璧

function throttle(func, wait, options) {
  var timeout, context, args, result
  var previous = 0
  if (!options) options = {}

  var later = function () {
    pervious = options.leading === false ? 0 : new Date().getTime()
    timeout = null
    func.apply(context, args)
    if (!timeout) context = args = null
  }

  var throttled = function () {
    var now = +new Date()
    if (!previous && options.leading == false) previous = now
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
  }
  throttled.cancel = function () {
    clearTimeout(timeout)
    previous = 0
    timeout = null
  }

  return throttled
}
