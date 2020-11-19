var count = 1
var container = document.getElementById('container')

function getUserAction() {
  container.innerHTML = count ++
}

function debounce(func, wait = 1000, immediate = true) {
  var timeout, result;
  var debounced = function () {
    var context = this, args = arguments
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      var callNow = !timeout
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
      if (callNow) result = func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
    return result
  }
  debounced.cancel = function () {
    clearTimeout(timeout)
    timeout = null
  }
  return debounced
}
container.addEventListener('mousemove', debounce(getUserAction))


function debounce(func, wait = 1000, immediate = true) {
  var context, args, result, timer
  var d = function () {
    context = this
    args = arguments

    if (timer) clearTimeout(timer)

    if (immediate) {
      var callNow = !timer

      timer = setTimeout(function () {
        timer = null
      }, wait)

      if (callNow) result = func.apply(context, args)
    } else {
      timer = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
  }
  d.cancel = function () {
    timer = null
    clearTimeout(timer)
  }
  return d
}
