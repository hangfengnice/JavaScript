// 1 防止对象属性名冲突

// 2. typeof 的值 为 symbol

// 3. 不能使用 new

// 4. 不能与其他类型的值进行操作

// 5. 可以用 toSting 跟 Sting 进行操作

// 6. 魔术字符串

// 7. 属性名的遍历 Reflect.ownKeys

const s = Symbol('hello')

// console.log(s.description);

let obj = {
  [s]: 'yes',
  [s]: 'good'
}