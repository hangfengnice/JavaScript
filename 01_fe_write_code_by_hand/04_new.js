/**
 * 手写 new 操作符
 * new 的执行过程：
 * 1. 创建一个空对象，原型指向构造函数的 prototype
 * 2. 将构造函数的 this 绑定到新对象，执行构造函数
 * 3. 如果构造函数返回对象/函数，则返回该对象；否则返回新创建的对象
 *
 * @param {Function} Constructor - 构造函数
 * @param {...*} args - 传递给构造函数的参数
 * @returns {object} 新创建的实例对象
 *
 * @example
 * function Person(name) {
 *   this.name = name
 * }
 * const p = newByHand(Person, 'Alice')
 */
function newByHand(Constructor, ...args) {
  // 1. 创建新对象，继承构造函数的原型
  const instance = Object.create(Constructor.prototype)

  // 2. 执行构造函数，绑定 this 到新对象
  const result = Constructor.apply(instance, args)

  // 3. 判断构造函数的返回值
  // 如果返回对象或函数，使用该返回值；否则返回新创建的实例
  const isObject = result !== null && typeof result === 'object'
  const isFunction = typeof result === 'function'

  return isObject || isFunction ? result : instance
}
