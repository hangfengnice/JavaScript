function debounce(fn, delay) {
  let timer;
  return function () {
    let args = [].slice.call(arguments)
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

function throttle(fn, delay) {
  let timer;
  return function () {
    let args = [].slice.call(argumnets)
    if(!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, delay)
    }
  }
}
