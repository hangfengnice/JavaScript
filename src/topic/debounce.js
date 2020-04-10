var count = 1
var container = document.getElementById('container')

function getUserAction(e) {
  // console.log(e);
  container.innerHTML = count ++
}
var setUseAction = debounce(getUserAction, 10000, true)
// container.onmousemove = getUserAction
container.onmousemove = setUseAction

document.getElementById('btn').addEventListener('click', function () {
  setUseAction.cancel()
})

function debounce(func, wait, immediate) {
  var timeout, result

  var debounced = function () {
    var context = this
    var args = arguments
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      var callNow = !timeout
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
      if (callNow) result = func.apply(container, args)
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
