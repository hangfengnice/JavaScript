// 1 属性简写 方法简写  属性的赋值器（setter）和取值器（getter）


// 2 属性名表达式

let lastWord = 'last word';

const a = {
  'first word': 'hello',
  [lastWord]: 'world'
};
console.log(a['first word'], // "hello"
a[lastWord], // "world"
a['last word'])

// 注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]，这一点要特别小心。

const keyA = {a: 1};
const keyB = {b: 2};

const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
};

console.log(myObject) // Object {[object Object]: "valueB"}

let obj = { age: 18, name: "hangfeng"};
Object.getOwnPropertyDescriptor(obj, "foo", {
  value: 123,
  writable: true,
  enumerable: false,
  configurable: true
});

console.log(Object.keys(obj))
console.log(Reflect.ownKeys(obj))

// 扩展运算符

// let { ...z } = null; // 运行时错误
// let { ...z } = undefined; // baocuo 

// Object.is()

Object.is(+0, -0); // false
Object.is(NaN, NaN);

// objcet.assign()
//Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性  若是函数 求职 在赋值

console.log(Object.assign([1, 2, 3], [4, 5])); // [4, 5, 3]

// Object.getOwnPropertyDescriptors()

// Object.fromEntries() 

// 该方法的一个用处是配合URLSearchParams对象，将查询字符串转为对象
// Object.fromEntries(new URLSearchParams('foo=bar&baz=qux')
