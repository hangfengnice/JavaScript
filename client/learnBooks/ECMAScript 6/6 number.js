// isFinite() isNaN()

// Number.parseInt() Number.parseFloat()

// Number.isInterger()
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true

console.log(Number.isInteger("23"))  // false


// 模拟 Math.trunc
Math.trunc =
  Math.trunc ||
  function(x) {
    return x < 0 ? Math.ceil(x) : Math.floor(x);
  };

// Math.sign
// 参数为正数，返回+1；
// 参数为负数，返回-1；
// 参数为 0，返回0；
// 参数为-0，返回-0;
// 其他值，返回NaN。
// console.log(Math.sign(-5), // -1
// Math.sign(5), // +1
// Math.sign(0), // +0
// Math.sign(-0), // -0
// Math.sign(NaN) )

// Math.sign =
//   Math.sign ||
//   function(x) {
//     x = +x; // convert to a number
//     if (x === 0 || isNaN(x)) {
//       return x;
//     }
//     return x > 0 ? 1 : -1;
//   };

// 指数运算符
