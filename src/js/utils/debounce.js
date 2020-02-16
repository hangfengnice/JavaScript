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
let setUserAction = debounce(getUserAction, 10000, true)
// container.addEventListener("mousemove", debounce(getUserAction, 1000, true));
container.onmousemove = setUserAction

btn.onclick = setUserAction.cancel

function debounce(func, wait, immediate) {
  var timeout, result;
  var debounced =  function() {
    var context = this;
    var args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    }
    return result
  };

  debounced.cancel = function () {
    clearTimeout(timeout)
    timeout = null
  }
  return debounced
}
