/**
 * 柯里化函数
 * 将多参数函数转换为一系列单参数函数
 *
 * @param {Function} fn - 需要柯里化的函数
 * @returns {Function} 柯里化后的函数
 *
 * @example
 * function add(a, b, c) {
 *   return a + b + c
 * }
 * const curriedAdd = curry(add)
 * curriedAdd(1)(2)(3)  // 6
 * curriedAdd(1, 2)(3)  // 6
 * curriedAdd(1)(2, 3)  // 6
 */
function curry(fn) {
  return function curried(...args) {
    // 如果参数数量足够，直接执行原函数
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    }

    // 否则返回新函数，继续收集参数
    return function (...nextArgs) {
      return curried.apply(this, args.concat(nextArgs))
    }
  }
}

// ============ 使用示例 ============

// 1. 基础用法
function add(a, b, c) {
  return a + b + c
}

const curriedAdd = curry(add)

console.log('=== 示例 1: 基础柯里化 ===')
console.log(curriedAdd(1)(2)(3)) // 6
console.log(curriedAdd(1, 2)(3)) // 6
console.log(curriedAdd(1)(2, 3)) // 6
console.log(curriedAdd(1, 2, 3)) // 6

// 2. 实际应用：复用部分参数
console.log('\n=== 示例 2: 参数复用 ===')
function multiply(a, b, c) {
  return a * b * c
}

const curriedMultiply = curry(multiply)
const double = curriedMultiply(2) // 固定第一个参数为 2
const quadruple = double(2) // 固定前两个参数为 2, 2

console.log(double(3)(4)) // 2 * 3 * 4 = 24
console.log(quadruple(5)) // 2 * 2 * 5 = 20

// 3. 实际场景：日志函数
console.log('\n=== 示例 3: 日志函数 ===')
function log(level, time, message) {
  console.log(`[${level}] ${time}: ${message}`)
}

const curriedLog = curry(log)
const errorLog = curriedLog('ERROR')
const errorLogNow = errorLog(new Date().toLocaleTimeString())

errorLogNow('用户登录失败') // [ERROR] 14:30:25: 用户登录失败
errorLogNow('数据库连接超时') // [ERROR] 14:30:25: 数据库连接超时

// 4. 函数组合
console.log('\n=== 示例 4: 函数组合 ===')
function replace(pattern, replacement, str) {
  return str.replace(pattern, replacement)
}

const curriedReplace = curry(replace)
const removeSpaces = curriedReplace(/\s+/g, '')
const toUpperCase = (str) => str.toUpperCase()

const processString = (str) => toUpperCase(removeSpaces(str))

console.log(processString('hello world')) // HELLOWORLD

// 5. 计算折扣价格
console.log('\n=== 示例 5: 价格计算 ===')
function discount(rate, basePrice) {
  return basePrice * (1 - rate)
}

const curriedDiscount = curry(discount)
const tenPercentOff = curriedDiscount(0.1)
const twentyPercentOff = curriedDiscount(0.2)

console.log(`原价 100，9折: ${tenPercentOff(100)}`) // 90
console.log(`原价 100，8折: ${twentyPercentOff(100)}`) // 80
