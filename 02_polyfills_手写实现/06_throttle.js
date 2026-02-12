/**
 * 节流函数 (Throttle)
 * 作用：在一定时间间隔内只执行一次函数，控制函数执行频率
 *
 * @param {Function} func - 需要节流的目标函数
 * @param {number} wait - 限制执行的时间间隔（毫秒）
 * @param {Object} [options={}] - 配置项
 * @param {boolean} [options.leading=true] - 是否在触发开始时立即执行
 * @param {boolean} [options.trailing=true] - 是否在触发结束后延迟执行
 * @returns {Function} 节流后的函数，带 cancel 方法
 *
 * @example
 * const handleScroll = throttle(() => console.log('scrolling'), 200)
 * window.addEventListener('scroll', handleScroll)
 */
export function throttle(func, wait, options = {}) {
  let timeoutId = null
  let savedContext = null
  let savedArgs = null
  let lastExecTime = 0

  /**
   * 延迟执行函数：处理定时器到期后的逻辑
   */
  const executeDelayed = function () {
    // 更新上次执行时间（如果禁用了首次立即执行，则重置为0）
    lastExecTime = options.leading === false ? 0 : Date.now()

    timeoutId = null
    func.apply(savedContext, savedArgs)

    // 执行完毕后释放保存的上下文和参数
    if (!timeoutId) {
      savedContext = savedArgs = null
    }
  }

  const throttled = function (...currentArgs) {
    const now = Date.now()

    // 1. 首次调用且禁用了首次立即执行，则记录当前时间（跳过首次执行）
    if (!lastExecTime && options.leading === false) {
      lastExecTime = now
    }

    // 2. 计算距离下次可执行的剩余时间
    const timeRemaining = wait - (now - lastExecTime)

    // 保存上下文和参数供延迟执行使用
    savedContext = this
    savedArgs = currentArgs

    // 3. 判断是否应该立即执行
    const shouldExecuteNow = timeRemaining <= 0 || timeRemaining > wait

    if (shouldExecuteNow) {
      // 情况 A: 已经达到等待时间
      // 情况 B: 系统时间被调整（如修改了系统时钟）
      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = null
      }

      lastExecTime = now
      func.apply(savedContext, savedArgs)

      // 执行完毕，释放内存
      if (!timeoutId) {
        savedContext = savedArgs = null
      }
    } else if (!timeoutId && options.trailing !== false) {
      // 情况 C: 时间未到，且允许尾部执行，且当前没有定时器在等待
      timeoutId = setTimeout(executeDelayed, timeRemaining)
    }
  }

  /**
   * 取消方法：清理定时器和状态，防止内存泄漏
   */
  throttled.cancel = function () {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    lastExecTime = 0
    timeoutId = savedContext = savedArgs = null
  }

  return throttled
}
