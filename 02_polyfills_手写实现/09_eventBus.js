class EventBus {
  constructor() {
    this.events = new Map()
  }

  /**
   * 验证事件名是否有效
   * @private
   */
  _validateEventName(eventName) {
    if (typeof eventName !== 'string' || eventName === '') {
      throw new TypeError('eventName must be a non-empty string')
    }
  }

  /**
   * 订阅事件
   * @param {string} eventName - 事件名
   * @param {Function} handler - 回调函数
   * @returns {Function} 取消订阅函数
   */
  on(eventName, handler) {
    this._validateEventName(eventName)
    if (typeof handler !== 'function') {
      throw new TypeError('handler must be a function')
    }
    const { events } = this
    const handlers = events.get(eventName) || new Set()
    handlers.add(handler)
    events.set(eventName, handlers)
    return () => this.off(eventName, handler)
  }

  /**
   * 订阅事件（仅触发一次）
   * @param {string} eventName - 事件名
   * @param {Function} handler - 回调函数
   * @returns {Function} 取消订阅函数
   */
  once(eventName, handler) {
    this._validateEventName(eventName)
    if (typeof handler !== 'function') {
      throw new TypeError('handler must be a function')
    }
    const wrapper = (...args) => {
      this.off(eventName, wrapper)
      handler(...args)
    }
    return this.on(eventName, wrapper)
  }

  /**
   * 取消订阅
   * @param {string} eventName - 事件名
   * @param {Function} handler - 要移除的回调函数
   */
  off(eventName, handler) {
    this._validateEventName(eventName)
    const { events } = this
    const handlers = events.get(eventName)
    if (!handlers) {
      return
    }
    handlers.delete(handler)
    if (handlers.size === 0) {
      events.delete(eventName)
    }
  }

  /**
   * 触发事件
   * @param {string} eventName - 事件名
   * @param {...*} args - 传递给回调函数的参数
   * @returns {boolean} 是否有监听器被执行
   */
  emit(eventName, ...args) {
    this._validateEventName(eventName)
    const { events } = this
    const handlers = events.get(eventName)
    if (!handlers || handlers.size === 0) {
      return false
    }
    // Copy to avoid issues if handlers mutate subscriptions during emit.
    ;[...handlers].forEach((handler) => handler(...args))
    return true
  }

  /**
   * 清空事件监听器
   * @param {string} [eventName] - 事件名（不传则清空所有）
   */
  clear(eventName) {
    const { events } = this
    if (arguments.length === 0) {
      events.clear()
      return
    }
    this._validateEventName(eventName)
    events.delete(eventName)
  }

  /**
   * 检查是否有某事件的监听器
   * @param {string} eventName - 事件名
   * @returns {boolean}
   */
  has(eventName) {
    this._validateEventName(eventName)
    const handlers = this.events.get(eventName)
    return handlers ? handlers.size > 0 : false
  }

  /**
   * 获取某事件的监听器数量
   * @param {string} eventName - 事件名
   * @returns {number}
   */
  listenerCount(eventName) {
    this._validateEventName(eventName)
    const handlers = this.events.get(eventName)
    return handlers ? handlers.size : 0
  }

  /**
   * 获取所有事件名
   * @returns {string[]}
   */
  eventNames() {
    return [...this.events.keys()]
  }
}

// Example usage:
// const bus = new EventBus();
// const off = bus.on("ready", (value) => console.log(value));
// bus.emit("ready", 42);
// off();
