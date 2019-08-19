console.log(typeof /k/);  // object 正则返回 object
console.log(undefined == null)  // true

// boolean 以下为 false
console.log(Boolean(false))
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));

// number 
console.log(-0 == +0)  // true
console.log(-0 === +0);  // true

console.log(0.000006);  // 0.000006
console.log(0.0000006)  // 6e-7  6个零 进行转换

let result = Number.MAX_VALUE + Number.MAX_VALUE
console.log(isFinite(result))  // false

// NaN
console.log(NaN == NaN) // false
console.log("10".valueOf()) // 10

let obj = {
  1: 2,
  2: 2
}
console.log(Number(obj))
console.log(obj.toString())
console.log(String(obj))
console.log(obj.toLocaleString())
console.log(obj.valueOf())

console.log(Number())  // 0
console.log(parseInt()) // NaN
console.log(parseInt(-1)) // -1
console.log(parseInt('')) // NaN
console.log(parseInt("-1o")) // -1
console.log(parseInt("070") === 70) // true

console.log(parseFloat("3.12e7")) // 31200000

console.log("nihao \n haha")
// console.log(undefined.toString())
// console.log(null.toString());

let num1 = 0x8
console.log(parseInt(num1, 10), parseInt(num1, 10).toString(2))

// object

let o = new Object()
console.log(o.constructor === Object)

// 3.5 操作符
let num2 = 25
let num3 = ~num2
console.log(num3)

console.log(!NaN)
console.log("+12" * '1')
console.log(Infinity / Infinity)
console.log(0 / 0)
console.log(0 - 0);

// let i = 0

// do {
//   i += 2
//   console.log(i);
// } while (i < 10)

// function test() {
//   console.log(Object.prototype.toString.call(arguments))
// }

// test(1,2,3)

function test1(num1, num2) {
  arguments[1] = 10
  console.log(num1, num2, arguments[0], arguments[1])
}

test1(0)
