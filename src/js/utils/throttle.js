let container = document.createElement('div')
let btn = document.createElement('button')
container.setAttribute(
  'style',
  "width: 100%;" +
  "height: 200px;" +
  "line-height: 200px;" +
  "text-align: center;" +
  "background-color: deepskyblue;" +
  "color: red;"
)
btn.textContent = 'reset'
var count = 1;
document.body.append(container, btn)

function getUserAction(e) {
  container.innerHTML = count++;
}
let setUserAction = throttle(getUserAction, 2000, true)
container.addEventListener("mousemove", setUserAction);

btn.onclick = setUserAction.cancel

function throttle(func, wait) {
  var timeout, context, args, result, previous = 0;
  var later = function () {
    previous = +new Date()
    timeout = null
    func.apply(context, args)
  }

  var throttled = function () {
    var now = +new Date()
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now;
      func.apply(context, args)
    } else if (!timeout) {
      timeout = setTimeout(later, remaining)
    }
  }
  return throttled
}

function throttle1(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {}
  var later = function () {
    previous = options.leading === false ? 0 : new Date().getTime()
    timeout = null
    func.apply(context, args)
    if (!timeout) context = args - null
  }

  var thorttled = function () {
    var now = new Date().getTime()
    if (!previous && options.leading == false) previous = now
    var remianing = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remianing > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context,args)
      if(!timeout) context = args = null
    } else if (!timeout && options.trailing !== flase) {
      timeout = setTimeout(later, remianing)
    }
  }
  return thorttled
}
