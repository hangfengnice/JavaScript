// 1 基本用法
{
  let a = 10
  var b = 1
}
console.log(b) // 1
// console.log(a) // reference error

// 不存在变量提升

// 暂时性死区

  // 此时的 typeof 变得不安全


// 不允许重复声明
   // let不允许在相同作用域内，重复声明同一个变量

// 2 形成块级作用域

  // ES6 允许块级作用域的任意嵌套
  // 块级作用域内部，优先使用函数表达式

// const 常量
  
  // 类似只读

// ES6 声明变量的 6 种方法 var function let const import class

// 
let b1 = 1;
console.log(window.b1);  // undefined

// 获取全局对象

// 方法一
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);

// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};
