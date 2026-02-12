/**
 * 防抖函数：在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时
 *
 * @param {Function} func - 需要防抖的函数
 * @param {number} wait - 延迟时间（毫秒）
 * @param {boolean} [immediate=false] - 是否立即执行（true: 首次触发立即执行）
 * @returns {Function} 防抖后的函数，带 cancel 方法
 *
 * @example
 * const save = debounce(() => console.log('saved'), 1000)
 * input.addEventListener('input', save)
 * save.cancel() // 取消防抖
 */
function debounce(func, wait, immediate = false) {
  let timeoutId = null
  let lastResult

  const debounced = function (...args) {
    const context = this

    // 清除之前的定时器
    if (timeoutId) clearTimeout(timeoutId)

    if (immediate) {
      // 立即执行模式：首次触发立即执行，后续触发需等待 wait 时间后才能再次执行
      const shouldCallNow = !timeoutId

      // 设置定时器，wait 时间后重置状态
      timeoutId = setTimeout(() => {
        timeoutId = null
      }, wait)

      // 如果是首次触发（或上次定时器已到期），立即执行
      if (shouldCallNow) {
        lastResult = func.apply(context, args)
      }
    } else {
      // 延迟执行模式：等待 wait 时间结束后执行
      timeoutId = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }

    return lastResult
  }

  /**
   * 取消防抖：清除定时器，重置状态
   */
  debounced.cancel = function () {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
  }

  return debounced
}
