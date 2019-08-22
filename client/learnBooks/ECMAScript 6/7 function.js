// function foo( x = 1 ){

// }

// function f(x = 1, y) {
//   return [x, y];
// }

// f() // [1, undefined]
// f(2) // [2, undefined])
// // f(, 1) // 报错
// f(undefined, 1)

///函数的 length 属性 § ⇧
// 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。

function test1(a) {}
console.log(test1.length)  // 1

function test2(a = 5) {}
console.log(test2.length);  // 0

function test3(a, b, c =5) {}
console.log(test3.length);  // 2

// 非尾参数
function test4(a, b = 5, c) {}
console.log(test4.length)  // 1

function foo() {};
foo.bind({}).name // "bound foo" 