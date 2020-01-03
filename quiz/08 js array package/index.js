let arr = [1, 2, , 3]

console.log(arr.length);

// arr = arr.filter(item => !!item) 会过滤掉 null undefined
// arr.filter(item => true)
arr = arr.filter(Boolean) // arr.filter(Number) arr.filter(String) // arr.flat()

console.log(arr);

let arr2 = arr.map(parseInt)

console.log(arr2);

var arr3 = arr.concat(arr2)

console.log(arr3);

// let arr4 = arr3.filter((item, index, arr) => arr.indexOf(item) == index )
let arr4 = [...new Set(arr3)]

console.log(arr4);

