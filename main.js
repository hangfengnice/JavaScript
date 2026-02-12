class MyPromise {
  // 构造方法
  constructor(executor) {
    // 初始化值
    this.initValue()
    // 初始化this指向
    this.initBind()
    // 执行传进来的函数
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }

  initBind() {
    // 初始化this
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
  }

  initValue() {
    // 初始化值
    this.PromiseResult = null // 终值
    this.PromiseState = 'pending' // 状态

    this.onFulfilledCallbacks = [] // 成功回调函数队列
    this.onRejectedCallbacks = [] // 失败回调函数队列
  }

  resolve(value) {
    if (this.PromiseState !== 'pending') return
    // 如果执行resolve，状态变为fulfilled
    this.PromiseState = 'fulfilled'
    // 终值为传进来的值
    this.PromiseResult = value

    while (this.onFulfilledCallbacks.length) {
      const callback = this.onFulfilledCallbacks.shift()
      callback(value)
    }
  }

  reject(reason) {
    if (this.PromiseState !== 'pending') return
    // 如果执行reject，状态变为rejected
    this.PromiseState = 'rejected'
    // 终值为传进来的reason
    this.PromiseResult = reason
    while (this.onRejectedCallbacks.length) {
      const callback = this.onRejectedCallbacks.shift()
      callback(reason)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (val) => val
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason
          }

    if (this.PromiseState === 'fulfilled') {
      onFulfilled(this.PromiseResult)
    } else if (this.PromiseState === 'rejected') {
      onRejected(this.PromiseResult)
    } else if (this.PromiseState === 'pending') {
      this.onFulfilledCallbacks.push(onFulfilled.bind(this))
      this.onRejectedCallbacks.push(onRejected.bind(this))
    }
  }
}

// 输出 ”成功“
const test = new MyPromise((resolve, reject) => {
  // resolve('成功')
  setTimeout(() => {
    reject('失败')
  }, 1000)
}).then(
  (res) => console.log(res),
  (err) => console.log(err),
)
