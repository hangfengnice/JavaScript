/**
 * 手写 Function.prototype.call
 *
 * 实现要点：
 * 1. null/undefined 绑定到全局对象（使用 globalThis 兼容多环境）
 * 2. 原始值（0 / '' / false）通过 Object() 装箱，而非错误地绑定到 window
 * 3. 使用 Symbol 作为临时属性名，避免与目标对象现有属性冲突
 *
 * TS 知识点：
 * - declare global：扩展全局已有接口
 * - this 参数：TS 独有语法，声明函数体内 this 的类型（编译后会被擦除）
 * - 泛型约束 A extends unknown[]：比 any[] 更安全的可变参数类型
 * - Record<symbol, unknown>：用 symbol 做键的索引签名
 */

// ─── 辅助类型 ─────────────────────────────────────────────────────────────
// 用可选索引签名，让 delete 操作在类型层面合法
type SymbolIndexable = { [key: symbol]: unknown | undefined }

// ─── 扩展声明 ─────────────────────────────────────────────────────────────
// 用 myCall 而非直接覆盖 call，避免破坏内置类型
declare global {
  interface Function {
    myCall<T, A extends unknown[], R>(
      this: (this: T, ...args: A) => R,
      context: T | null | undefined,
      ...args: A
    ): R
  }
}

// ─── 实现 ─────────────────────────────────────────────────────────────────
Function.prototype.myCall = function <T, A extends unknown[], R>(
  this: (this: T, ...args: A) => R,
  context: T | null | undefined,
  ...args: A
): R {
  // 运行时防御：原生 call 在非函数上调用会抛 TypeError
  if (typeof this !== 'function') {
    throw new TypeError(`${String(this)} is not a function`)
  }

  // null / undefined → globalThis；原始值 → 装箱对象
  // Object(1) → Number{1}, Object('foo') → String{'foo'}
  const ctx: SymbolIndexable =
    context == null
      ? (globalThis as SymbolIndexable)
      : (Object(context) as SymbolIndexable)

  // Symbol('fn') 带描述符，调试时比 Symbol() 更友好
  const fn = Symbol('fn')
  ctx[fn] = this
  const result = (ctx[fn] as (...a: A) => R)(...args)
  delete ctx[fn] // SymbolIndexable 的值含 undefined，delete 类型合法
  return result
}

// ─── 测试 ──────────────────────────────────────────────────────────────────

interface User {
  name: string
  age: number
}

function greet(this: User, greeting: string): string {
  return `${greeting}, 我是 ${this.name}，今年 ${this.age} 岁`
}

function sum(this: unknown, a: number, b: number): number {
  return a + b
}

const user: User = { name: 'Alice', age: 25 }

// 1. 基础用法
console.log(greet.myCall(user, 'Hello')) // Hello, 我是 Alice，今年 25 岁

// 2. 无 this 依赖的函数
console.log(sum.myCall(null, 1, 2)) // 3

// 3. 原始值会被装箱（运行时 this 变成 Number 对象）
function showThis(this: number): string {
  return `type: ${typeof this}, value: ${this}`
}
console.log(showThis.myCall(42)) // type: object, value: 42

export {}
