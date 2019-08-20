// Array
let colors = new Array(5)
console.log(colors)

console.log(Array(3))
console.log([1,2,])

let colors1 = ['red', 'bule', 'green']
colors1.length = 2
colors1[7] = 'yellow'
console.log(colors1[2], colors1)

console.log(Array.isArray(colors1));

// sort 比较的是字符串

let person = {name: 'hangfeng'}
let people = [{ name: "hangfeng"}]

let morePeople = [person]

console.log(people.indexOf(person))  // -1
console.log(morePeople.indexOf(person))  // 0

// 迭代方法 every some filter map forEach

// let numbers = [1,2,3,4,5,4,3,2,1]
// let everyResult = numbers.every((item, index, array) => {
//   console.log(item, index)
//   return item > 2
// })
// console.log(everyResult)

// let someResult = numbers.some((item, index, array) => {
//   console.log(item, index);
//   return item > 2;
// });
// console.log(someResult);

// numbers.forEach((item, index, array) => {
//   console.log(item + 1 , index)
// })
// console.log(numbers)

// 归并方法
let values = [1,2,3,4,5]
console.log(values.reduce((prev, current, index, array) => {
  return prev + current
}, 5))

// date

// Date.parse 解析字符串
// console.log(Date.parse(1998))

console.log(new Date(Date.parse("1/2/2001")))
console.log(new Date())

console.log(new Date().toLocaleDateString, ": ", new Date().toString())
console.log(new Date().valueOf())

console.log(new Date().toLocaleDateString())
console.log(new Date().toLocaleTimeString());
console.log(new Date().toUTCString());

// RegExp
let re = null,
    i;
for(i = 0; i < 10; i ++) {
  re = /cat/g
  console.log(re.test("catastrophe"));
}

for (i = 0; i < 10; i++) {
  re = RegExp('cat', 'g')
  re.test("catastrophe");
}

var text = 'mom and dad and baby'
var pattern = /mom( and dad( and baby)?)?/gi
var matches = pattern.exec(text)
console.log(matches)

// function 
function outer () {
  inner()
}

function inner() {
  console.log(arguments.callee.caller)
}

outer()

// 

let num = 100
console.log(num.toFixed(1))
console.log(num.toExponential(1))
console.log(num.toPrecision(1))

// string

let stringValue = 'hello world'
// console.log(object)
let colorList = "['red', 'yellow', 'blue']"
console.log(colorList.split(',', 2))

let string1 = 'yellow'

console.log(string1.localeCompare("yellow1"))

let uri = 'http://www.wrox.com/illeager hello'
console.log(encodeURI(uri))

eval("var msg = 'hello word'")
console.log(msg)

console.log(Math.max.apply(Math,[1,2,3,4,5]))
