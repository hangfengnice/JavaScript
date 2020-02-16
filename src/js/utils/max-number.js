console.log(Math.max());

var arr = [1, 3 ,2, 5, 6]
console.log(eval('Math.max(' + arr + ")"))

// console.log(Math.max.apply(, arr));

console.log([1, "1", '#'].toString());

console.log(Array.isArray([]));

let count = 0
let value = arr.some(item => {
  count ++
  return item > 2
})
console.log(value, count);