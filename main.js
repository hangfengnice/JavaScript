var count = 1
var container = document.getElementById('container')

function getUserAction(event) {
  console.log(this, event)
  container.innerHTML = count++
}

container.onmousemove = throttle(getUserAction, 1000, {})

function throttle(func, wait, options) {
  var timeout, context, args, result
  var previous = 0

  if (!options) {
    options = {}
  }

  var later = function () {
    previous = +new Date()
    timeout = null
    func.apply(this, context)
  }

  function throttled() {
    var now = +new Date()

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
    } else if (!timeout) {
      timeout = setTimeout(later, remaining)
    }
  }

  return throttled
}
