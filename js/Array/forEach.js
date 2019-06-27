// forEach

var arr = ["ying", 1, 2, "hangfeng"];

const result = arr.forEach((item, index, arr) => {
  console.log(item, index, arr)
});

console.log(arr); // ["ying", 1, 2, "hangfeng"]

console.log(result) // undefined