// 数值的扩展

// 1 二进制和八进制表示法
{
  // ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示
  console.log(0b111110111 === 503); // true
  console.log(0o767 === 503); // true
  // 如果要将0b和0o前缀的字符串数值转为十进制，要使用Number方法
  console.log(Number("0b111"), Number("0o10")); // 7 8
}
// 2 Number.isFinite(), Number.isNaN()
{
  // Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity
  // 注意，如果参数类型不是数值，Number.isFinite一律返回false

  // Number.isNaN()用来检查一个值是否为NaN
  console.log(
    isFinite(25), // true
    isFinite("25"), // true
    Number.isFinite(25), // true
    Number.isFinite("25"), // false

    isNaN(NaN), // true
    isNaN("NaN"), // true
    Number.isNaN(NaN), // true
    Number.isNaN("NaN"), // false
    Number.isNaN(1), // false
  )
}
// 3 Number.parseInt(), Number.parseFloat() 
{
  // ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。

  // ES5的写法
  parseInt("12.34"); // 12
  parseFloat("123.45#"); // 123.45
  // ES6的写法
  console.log(
    Number.parseInt("12.34"), // 12
    Number.parseFloat("123.45#") // 123.45
  )
  
}

// 4 Number.isInterger()
{
  // 如果参数不是数值，Number.isInteger返回false。
  console.log(Number.isInteger(23)); // true
  console.log(Number.isInteger(23.0)); // true
  console.log(Number.isInteger("23")); // false
}

// 5 安全整数和 Number.isSafeInteger()
{
  // JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。
}

// 6 Math 对象的扩展

// 6.1 Math.trunc()
// Math.trunc方法用于去除一个数的小数部分，返回整数部分
{
  // 对于非数值，Math.trunc内部使用Number方法将其先转为数值。
  // 对于空值和无法截取整数的值，返回NaN。

  // 模拟 Math.trunc
  Math.trunc = Math.trunc || ( x => x < 0 ? Math.ceil(x) : Math.floor(x));
}

// 6.2 Math.sign()
{
  // 参数为正数，返回+1；
  // 参数为负数，返回-1；
  // 参数为 0，返回0；
  // 参数为-0，返回-0;
  // 其他值，返回NaN。
  // 如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回NaN。
  console.log(
    Math.sign(-5), // -1
    Math.sign(5), // +1
    Math.sign(0), // +0
    Math.sign(-0), // -0
    Math.sign(NaN) // NaN
  );

  // 代码模拟
  Math.sign = Math.sign || 
    function(x) {
      x = +x; // convert to a number
      if (x === 0 || isNaN(x)) {
        return x;
      }
      return x > 0 ? 1 : -1;
    };
}

// 7 指数运算符
// ES2016 新增了一个指数运算符（**）
{
  console.log(2 ** 2, 2 ** 3); // 4 8
  // 这个运算符的一个特点是右结合，而不是常见的左结合。多个指数运算符连用时，是从最右边开始计算的。
  console.log(2 ** (3 ** 2)); // 512

  // 新的赋值运算符（**=)
  let a = 1.5;
  console.log((a **= 2)); // 2.25 等同于 a = a * a;

  let b = 4;
  console.log((b **= 3)); // 64 等同于 b = b * b * b;

  // V8 引擎的指数运算符与Math.pow的实现不相同，对于特别大的运算结果，两者会有细微的差异。
  // console.log(Math.pow(99, 99) ===  99 ** 99); //true
}
