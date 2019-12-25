let arr = [1, 2, 3, 4, 5]

function changePos(a, b) {
  arr[a] = arr.splice(b, 1, arr[a])[0]
}
console.log(changePos(2, 3), arr);

// 要点1. temp 临时变量

// 要点2. es6 语法

// 要点3. 索引的范围 1 - arr.length -> arr.length - 1

// 要点4. 数组的位置移动本质是位置交换！

let arr1 = [1, 2, 3, 4, 5]

function exchangePos(a, b) {
  [arr1[a], arr1[b]] = [arr1[b], arr1[a]]
}
console.log(exchangePos(1, 3), arr1);