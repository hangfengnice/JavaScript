/**
 * 函数组合
 * 将多个函数从右到左组合成一个函数
 *
 * @param {...Function} fns - 要组合的函数列表
 * @returns {Function} 组合后的函数
 *
 * @example
 * const add1 = x => x + 1
 * const multiply2 = x => x * 2
 * const result = compose(add1, multiply2)(5)  // (5 * 2) + 1 = 11
 */
function compose(...fns) {
  return function (x) {
    return fns.reduceRight((acc, fn) => fn(acc), x)
  }
}

// ============ 使用示例 ============

// 1. 基础用法
console.log('=== 示例 1: 基础组合 ===')
const add1 = (x) => x + 1
const multiply2 = (x) => x * 2
const subtract3 = (x) => x - 3

// 从右到左执行: subtract3(multiply2(add1(5)))
// 5 + 1 = 6 → 6 * 2 = 12 → 12 - 3 = 9
const calculate = compose(subtract3, multiply2, add1)
console.log(calculate(5)) // 9

// 2. 字符串处理
console.log('\n=== 示例 2: 字符串处理 ===')
const toUpperCase = (str) => str.toUpperCase()
const addExclamation = (str) => str + '!!!'
const trim = (str) => str.trim()

const processString = compose(addExclamation, toUpperCase, trim)
console.log(processString('  hello world  ')) // HELLO WORLD!!!

// 3. 数据转换管道
console.log('\n=== 示例 3: 数据转换 ===')
const users = [
  { name: 'Alice', age: 25, active: true },
  { name: 'Bob', age: 30, active: false },
  { name: 'Charlie', age: 35, active: true },
]

const getActiveUsers = (users) => users.filter((u) => u.active)
const getNames = (users) => users.map((u) => u.name)
const joinWithComma = (names) => names.join(', ')

const getActiveUserNames = compose(joinWithComma, getNames, getActiveUsers)
console.log(getActiveUserNames(users)) // Alice, Charlie

// 4. 数学运算
console.log('\n=== 示例 4: 数学运算 ===')
const square = (x) => x * x
const double = (x) => x * 2
const addTen = (x) => x + 10

// (5 + 10) * 2 = 30, 30^2 = 900
const mathPipeline = compose(square, double, addTen)
console.log(mathPipeline(5)) // 900

// 5. 价格计算
console.log('\n=== 示例 5: 价格计算 ===')
const applyDiscount = (price) => price * 0.9 // 9折
const addTax = (price) => price * 1.1 // 加10%税
const formatPrice = (price) => `$${price.toFixed(2)}`

// 先打折，再加税，最后格式化
const calculateFinalPrice = compose(formatPrice, addTax, applyDiscount)
console.log(calculateFinalPrice(100)) // $99.00

// 6. 与 pipe 的对比（从左到右）
console.log('\n=== 示例 6: pipe vs compose ===')
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x)

const composeFn = compose(subtract3, multiply2, add1)
const pipeFn = pipe(add1, multiply2, subtract3)

console.log('compose(subtract3, multiply2, add1)(5):', composeFn(5)) // 9
console.log('pipe(add1, multiply2, subtract3)(5):', pipeFn(5)) // 9
// 执行顺序相反，但结果相同

// compose: 5 → add1 → multiply2 → subtract3
// pipe:    5 → add1 → multiply2 → subtract3
// (实际上这个例子它们顺序一样，因为写法对称)

// 更清楚的对比：
const f = (x) => `f(${x})`
const g = (x) => `g(${x})`
const h = (x) => `h(${x})`

console.log('\ncompose(h, g, f)("x"):', compose(h, g, f)('x')) // h(g(f(x)))
console.log('pipe(f, g, h)("x"):', pipe(f, g, h)('x')) // h(g(f(x)))
