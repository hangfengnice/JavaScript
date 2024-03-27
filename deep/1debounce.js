var count = 1
var container = document.getElementById('container')

function getUserAction() {
  console.log(this, 'this')
  container.textContent = count++
}

function debounce(func, wait, immediate) {
  var timeout, result

  var debounced = function () {
    var context = this
    var args = arguments

    if (timeout) clearTimeout(timeout)

    if (immediate) {
      var callNow = !timeout
      timeout = setTimeout(function () {
        clearTimeout(timeout)
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
  debounced.canceled = function () {
    clearTimeout(timeout)
    timeout = null
  }
  return debounced
}

var setUser = debounce(getUserAction, 10000, true)

container.onmousemove = setUser

document.getElementById('btn').addEventListener('click', function () {
  setUser.canceled()
})
