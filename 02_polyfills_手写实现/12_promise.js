/**
 * 手写 Promise 实现
 * 符合 Promise/A+ 规范
 */

// Promise 的三种状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    // 初始状态为 pending
    this.state = PENDING
    // 成功的值
    this.value = undefined
    // 失败的原因
    this.reason = undefined
    // 成功回调队列（处理异步和多次 then 调用）
    this.onFulfilledCallbacks = []
    // 失败回调队列
    this.onRejectedCallbacks = []

    // 成功时调用
    const resolve = (value) => {
      // 只有 pending 状态才能转换
      if (this.state === PENDING) {
        this.state = FULFILLED
        this.value = value
        // 执行所有成功回调
        this.onFulfilledCallbacks.forEach((callback) => callback())
      }
    }

    // 失败时调用
    const reject = (reason) => {
      // 只有 pending 状态才能转换
      if (this.state === PENDING) {
        this.state = REJECTED
        this.reason = reason
        // 执行所有失败回调
        this.onRejectedCallbacks.forEach((callback) => callback())
      }
    }

    // 立即执行 executor
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  /**
   * then 方法
   * @param {Function} onFulfilled - 成功回调
   * @param {Function} onRejected - 失败回调
   * @returns {MyPromise} 新的 Promise 实例
   */
  then(onFulfilled, onRejected) {
    // 值穿透：如果参数不是函数，使用默认函数
    onFulfilled =
      typeof onFulfilled === 'function' ? onFulfilled : (value) => value
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason
          }

    // 返回新的 Promise，实现链式调用
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.state === FULFILLED) {
        // 使用 setTimeout 模拟微任务（规范要求异步执行）
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value)
            // 处理返回值
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      } else if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      } else if (this.state === PENDING) {
        // 如果还是 pending，将回调存入队列
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
      }
    })

    return promise2
  }

  /**
   * catch 方法
   * @param {Function} onRejected - 失败回调
   * @returns {MyPromise}
   */
  catch(onRejected) {
    return this.then(null, onRejected)
  }

  /**
   * finally 方法
   * 无论成功还是失败都会执行
   * @param {Function} callback - 回调函数
   * @returns {MyPromise}
   */
  finally(callback) {
    return this.then(
      (value) => MyPromise.resolve(callback()).then(() => value),
      (reason) =>
        MyPromise.resolve(callback()).then(() => {
          throw reason
        }),
    )
  }

  /**
   * Promise.resolve 静态方法
   * @param {*} value - 要转换的值
   * @returns {MyPromise}
   */
  static resolve(value) {
    // 如果是 Promise 实例，直接返回
    if (value instanceof MyPromise) {
      return value
    }
    // 否则包装成 Promise
    return new MyPromise((resolve) => resolve(value))
  }

  /**
   * Promise.reject 静态方法
   * @param {*} reason - 拒绝原因
   * @returns {MyPromise}
   */
  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason))
  }

  /**
   * Promise.all 静态方法
   * 所有 Promise 都成功才成功，有一个失败就失败
   * @param {Array} promises - Promise 数组
   * @returns {MyPromise}
   */
  static all(promises) {
    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError('promises must be an array'))
      }

      const results = []
      let completedCount = 0
      const total = promises.length

      // 空数组直接 resolve
      if (total === 0) {
        return resolve(results)
      }

      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          (value) => {
            results[index] = value
            completedCount++
            // 所有 Promise 都完成时，resolve 结果数组
            if (completedCount === total) {
              resolve(results)
            }
          },
          (reason) => {
            // 任意一个失败，立即 reject
            reject(reason)
          },
        )
      })
    })
  }

  /**
   * Promise.race 静态方法
   * 返回最先完成的 Promise 结果（无论成功还是失败）
   * @param {Array} promises - Promise 数组
   * @returns {MyPromise}
   */
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError('promises must be an array'))
      }

      promises.forEach((promise) => {
        MyPromise.resolve(promise).then(resolve, reject)
      })
    })
  }

  /**
   * Promise.allSettled 静态方法
   * 等待所有 Promise 完成（无论成功还是失败）
   * @param {Array} promises - Promise 数组
   * @returns {MyPromise}
   */
  static allSettled(promises) {
    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError('promises must be an array'))
      }

      const results = []
      let completedCount = 0
      const total = promises.length

      if (total === 0) {
        return resolve(results)
      }

      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          (value) => {
            results[index] = { status: 'fulfilled', value }
            completedCount++
            if (completedCount === total) {
              resolve(results)
            }
          },
          (reason) => {
            results[index] = { status: 'rejected', reason }
            completedCount++
            if (completedCount === total) {
              resolve(results)
            }
          },
        )
      })
    })
  }

  /**
   * Promise.any 静态方法
   * 任意一个成功就成功，全部失败才失败
   * @param {Array} promises - Promise 数组
   * @returns {MyPromise}
   */
  static any(promises) {
    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError('promises must be an array'))
      }

      const errors = []
      let rejectedCount = 0
      const total = promises.length

      if (total === 0) {
        return reject(new AggregateError([], 'All promises were rejected'))
      }

      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          (value) => {
            // 任意一个成功，立即 resolve
            resolve(value)
          },
          (reason) => {
            errors[index] = reason
            rejectedCount++
            // 全部失败时，reject
            if (rejectedCount === total) {
              reject(new AggregateError(errors, 'All promises were rejected'))
            }
          },
        )
      })
    })
  }
}

/**
 * 处理 Promise 解析过程（Promise Resolution Procedure）
 * @param {MyPromise} promise2 - then 返回的新 Promise
 * @param {*} x - onFulfilled/onRejected 的返回值
 * @param {Function} resolve - promise2 的 resolve
 * @param {Function} reject - promise2 的 reject
 */
function resolvePromise(promise2, x, resolve, reject) {
  // 防止循环引用
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise'))
  }

  // 防止多次调用
  let called = false

  // 如果 x 是对象或函数，可能是 thenable
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      const then = x.then

      if (typeof then === 'function') {
        // x 是 thenable，将其作为 Promise 处理
        then.call(
          x,
          (y) => {
            if (called) return
            called = true
            // 递归解析（y 可能还是 thenable）
            resolvePromise(promise2, y, resolve, reject)
          },
          (r) => {
            if (called) return
            called = true
            reject(r)
          },
        )
      } else {
        // x 是普通对象，直接 resolve
        resolve(x)
      }
    } catch (error) {
      if (called) return
      called = true
      reject(error)
    }
  } else {
    // x 是基本类型，直接 resolve
    resolve(x)
  }
}

// ============ 使用示例 ============

// 1. 基础用法
const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})

p1.then((value) => {
  console.log('1:', value) // 1: success
})

// 2. 链式调用
new MyPromise((resolve) => resolve(1))
  .then((value) => value + 1)
  .then((value) => value * 2)
  .then((value) => {
    console.log('2:', value) // 2: 4
  })

// 3. 错误处理
new MyPromise((resolve, reject) => {
  reject('error occurred')
})
  .then((value) => console.log(value))
  .catch((error) => {
    console.log('3:', error) // 3: error occurred
  })

// 4. Promise.all
MyPromise.all([
  MyPromise.resolve(1),
  MyPromise.resolve(2),
  MyPromise.resolve(3),
]).then((results) => {
  console.log('4:', results) // 4: [1, 2, 3]
})

// 5. Promise.race
MyPromise.race([
  new MyPromise((resolve) => setTimeout(() => resolve('slow'), 1000)),
  new MyPromise((resolve) => setTimeout(() => resolve('fast'), 100)),
]).then((result) => {
  console.log('5:', result) // 5: fast
})

// 6. Promise.allSettled
MyPromise.allSettled([
  MyPromise.resolve(1),
  MyPromise.reject('error'),
  MyPromise.resolve(3),
]).then((results) => {
  console.log('6:', results)
  // 6: [
  //   { status: 'fulfilled', value: 1 },
  //   { status: 'rejected', reason: 'error' },
  //   { status: 'fulfilled', value: 3 }
  // ]
})

// 7. 值穿透
new MyPromise((resolve) => resolve(1))
  .then()
  .then()
  .then((value) => {
    console.log('7:', value) // 7: 1
  })

// 8. finally
new MyPromise((resolve) => resolve('done'))
  .finally(() => {
    console.log('8: cleanup') // 8: cleanup
  })
  .then((value) => {
    console.log('8:', value) // 8: done
  })

// 9. 循环引用示例（会触发 TypeError）
const p = new MyPromise((resolve) => resolve('value'))
const circularPromise = p.then(() => {
  // 在 then 回调中返回 then 自己返回的 promise
  return circularPromise
})

circularPromise.catch((error) => {
  console.log('9:', error.message) // 9: Chaining cycle detected for promise
})

// 更清晰的循环引用例子
const promise1 = new MyPromise((resolve) => {
  setTimeout(() => resolve(1), 100)
})

// 错误写法：then 返回自身
const selfRef = promise1.then((value) => {
  console.log('收到值:', value)
  return selfRef // ❌ 返回自己，形成循环
})

selfRef.catch((err) => {
  console.log('循环引用错误:', err.message)
  // 输出: Chaining cycle detected for promise
})

// 10. 函数作为 thenable 对象（typeof x === 'function' 的必要性）
function customThenable() {
  console.log('I am a function')
}

// 给函数添加 then 方法，使其成为 thenable
customThenable.then = function (onFulfilled, onRejected) {
  setTimeout(() => onFulfilled('resolved from function thenable'), 100)
}

new MyPromise((resolve) => resolve(customThenable)).then((value) => {
  console.log('10:', value) // 10: resolved from function thenable
})
