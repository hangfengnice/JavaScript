const {
  generateRandomArray,
  generateNearlyOrderedArray,
  testSort,
} = require("./sortTestHelper");

const { selectionSort } = require("./selectionSort");
const { insertionSort } = require("./insertionSort");
const { bubbleSort } = require("./bubbleSort");
const { mergeSort } = require("./mergeSort");
const { mergeSortBU } = require("./mergeSortBU");
const { quickSort } = require("./quickSort");
const {quickSortBetter} = require('./quickSortBetter')
const {quickSort3Ways} = require('./quickSort3ways.js')

let n = 10000;

let orderArr = generateRandomArray(n, 0, 2);
// let orderArr = generateNearlyOrderedArray(n, 10);
let orderArrCopy = orderArr.slice();
let orderArrCopy1 = orderArr.slice();
let orderArrCopy2 = orderArr.slice();
let orderArrCopy3 = orderArr.slice();
let orderArrCopy4 = orderArr.slice();
let orderArrCopy5 = orderArr.slice();
let orderArrCopy6 = orderArr.slice();

testSort(selectionSort.name, selectionSort, orderArr);
testSort(insertionSort.name, insertionSort, orderArrCopy);
testSort(bubbleSort.name, bubbleSort, orderArrCopy1);
testSort(mergeSort.name, mergeSort, orderArrCopy2);
testSort(mergeSortBU.name, mergeSortBU, orderArrCopy3);
testSort(quickSort.name, quickSort, orderArrCopy4);
testSort(quickSortBetter.name, quickSortBetter, orderArrCopy5);
testSort(quickSort3Ways.name, quickSort3Ways, orderArrCopy6);
