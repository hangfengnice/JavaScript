const {
  swap,
  generateRandomArray,
  generateNearlyOrderedArray,
  printArray,
  testSort,
  copyArray
} = require("./sortTestHelper");

// 选择排序
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;
}

// 插入排序 **
// 普通
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i ++) {
//     for (j = i; j > 0 && arr[j] < arr[j - 1]; j --) {
//       if (arr[j] < arr[j - 1]) swap(arr, j, j - 1)
//     }
//   }
//   return arr
// }
// 优化
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i ++) {
    let e = arr[i]
    for (j = i; j > 0 && arr[j - 1] > e; j --) {
      arr[j] = arr[j - 1]
    }
    arr[j] = e
  }
  return arr
}

let n = 10000;
// let arr = generateRandomArray(n, 0, n);
// let arrCopy = copyArray(arr)
// testSort(selectionSort.name, selectionSort, arr);
// testSort(insertionSort.name, insertionSort, arrCopy)

let sortedArr = generateNearlyOrderedArray(n, 100)
let sortedArrCopy = copyArray(sortedArr)
testSort(selectionSort.name, selectionSort, sortedArr);
testSort(insertionSort.name, insertionSort, sortedArrCopy)


