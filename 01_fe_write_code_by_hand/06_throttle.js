/**
 * 节流函数 (Throttle)
 * 作用：在一定时间间隔内只执行一次函数。
 * * @param {Function} func - 需要节流的目标函数
 * @param {number} wait - 限制执行的时间间隔 (ms)
 * @param {Object} options - 配置项
 * @param {boolean} [options.leading=true] - 是否允许首次触发立即执行
 * @param {boolean} [options.trailing=true] - 是否允许最后一次触发后的收尾执行
 */
export function throttle(func, wait, options = {}) {
  let timeout = null
  let context = null
  let args = null
  let previous = 0

  // 内部执行器：专门处理定时器到期后的逻辑
  const executeTrailing = function () {
    // 关键点：如果禁用了首部执行，必须将 previous 重置为 0
    // 这样下次触发时，!previous 才会成立，从而再次触发 leading: false 的逻辑
    previous = options.leading === false ? 0 : Date.now()

    timeout = null
    func.apply(context, args)

    // 执行完毕后，如果没有新任务，则手动释放内存
    if (!timeout) {
      context = args = null
    }
  }

  const throttled = function (...currentArgs) {
    const now = Date.now()

    // 1. 如果是首次执行且禁用了首部立即执行
    if (!previous && options.leading === false) {
      previous = now
    }

    // 2. 计算距离下次可以执行的剩余时间
    const remaining = wait - (now - previous)

    context = this
    args = currentArgs

    // 3. 核心判断逻辑
    // 情况 A: 已经达到了等待时间 (remaining <= 0)
    // 情况 B: 系统时间被调整 (remaining > wait)
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }

      previous = now
      func.apply(context, args)

      if (!timeout) {
        context = args = null
      }
    }
    // 情况 C: 时间还没到，且允许收尾执行，且当前没有定时器在排队
    else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(executeTrailing, remaining)
    }
  }

  /**
   * 取消方法：用于组件销毁时清理定时器，防止内存泄漏
   */
  throttled.cancel = function () {
    if (timeout) {
      clearTimeout(timeout)
    }
    previous = 0
    timeout = context = args = null
  }

  return throttled
}
