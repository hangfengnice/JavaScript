// sort 

// var arr = [1,2,3,33,22,11];

// var result = arr.sort();

// console.log(result); // [ 1, 11, 2, 3, 22, 33 ] // 默认按Unicode编码排序

// console.log(arr); // [ 1, 11, 2, 3, 22, 33 ]

var arr = [1,2,3,33,22,11];

var result1 = arr.sort(function(a, b){
  return a - b; //a-b的值小于零 a在前
});

console.log(result1); // [ 1, 2, 3, 11, 22, 33 ]

console.log(arr); // [ 1, 2, 3, 11, 22, 33 ]
