// 乘法
console.log(Infinity * 0); // NaN
console.log(Infinity * Infinity); // Infinity

// 除法
console.log(Infinity / Infinity); // NaN
console.log(0 / 0); // NaN
console.log(Infinity / 2); // Infinity
console.log(2 / 0); // Infinity
console.log(Infinity / Infinity); // NaN

// 取模
console.log(Infinity % 2); // NaN
console.log(4 % 0); // NaN
console.log(Infinity % Infinity); // NaN
console.log(0 % NaN); // NaN
console.log(0 % 4); // 0
console.log(4 % Infinity); // 4

let test = {
  toString () {
    return 1
  },
  valueOf () {
    return 2
  }
}

// 加法
console.log(Infinity - Infinity); // NaN
console.log(1 + test);  // 若是对象， 先看 valueOf 后看 toString
console.log("1" + test); // 若是对象， 先看 valueOf 后看 toString
// 减法
console.log(1 - test);  // 若是对象， 先看 valueOf 后看 toString