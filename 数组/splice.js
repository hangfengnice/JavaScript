// splice

var arr = ["ying", 1, 2, "hangfeng"];

// const result = arr.splice(0,2) // 
// console.log(arr); // [ 2, 'hangfeng' ]
// console.log(result) // [ 'ying', 1 ]

const result = arr.splice(0,1,'jiaying') // 
console.log(arr); // [ 'jiaying', 1, 2, 'hangfeng' ]
console.log(result) // [ 'ying']