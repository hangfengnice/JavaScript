// 模式匹配

let a = 1
let b = 2
let [bar, foo] = [1]
// console.log(a, b)
// console.log(bar, foo)

// 结构赋值允许指定默认值

// let [x = 1] = [undefined]
// console.log(x)

// let [y = 1] = [null];
// console.log(y);

// 对象的解构
// 解构失败 变量的值为 undefined

// 可以对数组进行对象属性的解构

let x = 1;
let y = 2;

[x, y] = [y, x];