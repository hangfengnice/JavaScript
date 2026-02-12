/**
 * LazyMan 实现
 * 支持链式调用和任务队列管理
 *
 * @example
 * LazyMan('Hank')
 *   .sleep(3)
 *   .eat('dinner')
 *   .sleepFirst(5)
 *   .eat('supper')
 *
 * 输出：
 * Hi! This is Hank!
 * (等待 5 秒)
 * Wake up after 5 seconds
 * (等待 3 秒)
 * Wake up after 3 seconds
 * Eat dinner~
 * Eat supper~
 */

class LazyManClass {
  constructor(name) {
    this.name = name
    this.taskQueue = [] // 任务队列

    // 打招呼任务
    this.taskQueue.push(() => {
      console.log(`Hi! This is ${this.name}!`)
      this.next()
    })

    // 使用 setTimeout 确保所有同步的链式调用完成后再开始执行
    setTimeout(() => {
      this.next()
    }, 0)
  }

  /**
   * 执行下一个任务
   */
  next() {
    const task = this.taskQueue.shift()
    if (task) {
      task()
    }
  }

  /**
   * 吃东西
   * @param {string} food - 食物名称
   * @returns {LazyManClass} 返回自身，支持链式调用
   */
  eat(food) {
    this.taskQueue.push(() => {
      console.log(`Eat ${food}~`)
      this.next()
    })
    return this
  }

  /**
   * 睡眠指定时间（添加到队列末尾）
   * @param {number} seconds - 睡眠秒数
   * @returns {LazyManClass}
   */
  sleep(seconds) {
    this.taskQueue.push(() => {
      console.log(`Sleep ${seconds} seconds...`)
      setTimeout(() => {
        console.log(`Wake up after ${seconds} seconds`)
        this.next()
      }, seconds * 1000)
    })
    return this
  }

  /**
   * 优先睡眠（插入到队列最前面）
   * @param {number} seconds - 睡眠秒数
   * @returns {LazyManClass}
   */
  sleepFirst(seconds) {
    this.taskQueue.unshift(() => {
      console.log(`Sleep first ${seconds} seconds...`)
      setTimeout(() => {
        console.log(`Wake up after ${seconds} seconds`)
        this.next()
      }, seconds * 1000)
    })
    return this
  }

  /**
   * 工作
   * @param {string} task - 工作内容
   * @returns {LazyManClass}
   */
  work(task) {
    this.taskQueue.push(() => {
      console.log(`Working on: ${task}`)
      this.next()
    })
    return this
  }
}

/**
 * LazyMan 工厂函数
 * @param {string} name - 名字
 * @returns {LazyManClass}
 */
function LazyMan(name) {
  return new LazyManClass(name)
}

// ============ 使用示例 ============

console.log('=== 示例 1: 基础用法 ===')
LazyMan('Hank')
// 输出:
// Hi! This is Hank!

console.log('\n=== 示例 2: eat 链式调用 ===')
LazyMan('Tom').eat('lunch').eat('dinner')
// 输出:
// Hi! This is Tom!
// Eat lunch~
// Eat dinner~

console.log('\n=== 示例 3: sleep 延迟 ===')
LazyMan('Jack').sleep(2).eat('breakfast')
// 输出:
// Hi! This is Jack!
// Sleep 2 seconds...
// (等待 2 秒)
// Wake up after 2 seconds
// Eat breakfast~

console.log('\n=== 示例 4: sleepFirst 优先执行 ===')
LazyMan('Alice').eat('lunch').sleep(1).sleepFirst(3).eat('dinner')
// 输出:
// Hi! This is Alice!
// Sleep first 3 seconds...
// (等待 3 秒)
// Wake up after 3 seconds
// Eat lunch~
// Sleep 1 seconds...
// (等待 1 秒)
// Wake up after 1 seconds
// Eat dinner~

console.log('\n=== 示例 5: 复杂组合 ===')
LazyMan('Bob')
  .eat('breakfast')
  .work('coding')
  .sleep(2)
  .eat('lunch')
  .sleepFirst(1)
  .work('review')
// 输出:
// Hi! This is Bob!
// Sleep first 1 seconds...
// (等待 1 秒)
// Wake up after 1 seconds
// Eat breakfast~
// Working on: coding
// Sleep 2 seconds...
// (等待 2 秒)
// Wake up after 2 seconds
// Eat lunch~
// Working on: review

// ============ 核心原理说明 ============

/**
 * LazyMan 的核心设计思想：
 *
 * 1. 任务队列（taskQueue）
 *    - 所有操作（eat/sleep/work）都只是向队列添加任务函数
 *    - 不立即执行，而是存储起来
 *
 * 2. 延迟启动（setTimeout）
 *    - 确保所有链式调用完成后再开始执行队列
 *    - 这是实现"懒执行"的关键
 *
 * 3. 任务串联（next）
 *    - 每个任务执行完毕后调用 next() 触发下一个任务
 *    - 形成任务链，保证顺序执行
 *
 * 4. 优先级控制（sleepFirst）
 *    - 使用 unshift 插入队列头部，而不是 push 追加到尾部
 *    - 实现任务的优先级调度
 */

console.log('\n=== 原理演示：任务队列的执行顺序 ===')
const demo = LazyMan('Demo')
  .eat('A') // 任务 2：打印 Eat A
  .sleepFirst(1) // 任务 1：优先执行（unshift 到队列头）
  .eat('B') // 任务 3：打印 Eat B

// 实际队列顺序：
// [打招呼, sleepFirst(1), eat('A'), eat('B')]
//    ↓
// 执行：Hi -> 等待1秒 -> Eat A -> Eat B
