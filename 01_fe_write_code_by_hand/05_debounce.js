// 防抖函数：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
function debounce(func, wait, immediate) {
  let timeout = null
  let result

  const debounced = function () {
    const context = this
    const args = arguments

    // 清除之前的定时器
    if (timeout) clearTimeout(timeout)

    if (immediate) {
      // 立即执行模式：首次触发立即执行，后续触发需等待 wait 时间后才能再次执行
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) result = func.apply(context, args)
    } else {
      // 延迟执行模式：等待 wait 时间结束后执行
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }

    return result
  }

  // 取消防抖
  debounced.cancel = function () {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}
