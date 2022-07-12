const { insertSort } = require("./insertSort");
const {shellSort} = require('./shellSort')
const { selectionSort, selectionSortBetter } = require("./selectionSort");
const {bubbleSort} = require('./bubbleSort')
const {mergeSort, mergeSortBU} = require('./mergeSort')
const {quickSort, quickSort2, quickSort3warys} = require('./quickSort')

function generateRandomArray(n, l = 0, r = n) {
  let arr = [];
  let range = r - l + 1;
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * range);
  }
  return arr;
}
function generateNearlyOrderedArray(n, swapTimes) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = i;
  }
  for (let i = 0; i < swapTimes; i++) {
    let posx = Math.floor(Math.random() * n);
    let posy = Math.floor(Math.random() * n);
    [arr[posx], arr[posy]] = [arr[posy], arr[posx]];
  }
  return arr;
}
function isSorted(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

function testSort(callback, arr) {
  const { name } = callback;
  console.time(name);
  callback(arr);
  console.timeEnd(name);

  console.assert(isSorted(arr), `${name}: 排序错误`);
}

let arr = generateRandomArray(100000, 1, 3);
// let arr = generateNearlyOrderedArray(1000000, 3)
let arr1 = arr.slice();
let arr2 = arr.slice()
let arr3 = arr.slice()
let arr4 = arr.slice()
let arr5 = arr.slice()
let arr6 = arr.slice()
let arr7 = arr.slice()
let arr8 = arr.slice()
let arr9 = arr.slice()

// testSort(selectionSort, arr);
// testSort(selectionSortBetter, arr1)
testSort(insertSort, arr2);
// testSort(bubbleSort, arr3)
// testSort(shellSort, arr4)
// testSort(mergeSort, arr5)
testSort(mergeSortBU, arr6)
// testSort(quickSort, arr7)
// testSort(quickSort2, arr8)
testSort(quickSort3warys, arr9)

