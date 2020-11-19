var count = 1
var container = document.getElementById('container')

function getUserAction() {
  container.innerHTML = count ++
}

function throttle(func, wait = 3000, options = {}) {
  var timer, context, args, result, previous = 0

  var later = function () {
    previous = options.leading == false ? 0 : Date.now()
    timer = null
    func.apply(context, args)
    if (!timer) context = args = null
  }

  var t = function () {
    var now = Date.now()
    if (!previous && options.leading === false) previous = now

    var remaing = wait - (now - previous)
    context = this
    args = arguments

    if (remaing < 0 || remaing > wait) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      previous = now
      func.apply(context, args)
      if (!timer) context = args = null
    } else if (!timer && options.trailing){
      timer = setTimeout(later, remaing)
    }
  }
  return t
}

container.addEventListener('mousemove', throttle(getUserAction))


function throttle(func, wait, options = {}) {
  let timeout, context, args, result
  var previous = 0

  var later = function () {
    previous = options.leading === false ? 0 : Date.now()
    timeout = null
    func.apply(context, args)
    if (!timeout) context = args = null
  }
  var t = function () {
    var now = Date.now()
    if (!previous && previous.leading === false) previous = now
    var remaining = wait - (previous - now)
    context = this
    args = arguments
    if (remaining <= 0 || remaining >= wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing) {
      timeout = setTimeout(later, wait)
    }
  }
  return t
}
