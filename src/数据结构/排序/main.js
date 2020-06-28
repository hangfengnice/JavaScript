const { generateRandomArray, generateNearlyOrderedArray, testSort } = require("./sortTestHelper");

const { selectionSort } = require("./selectionSort");
const { insertionSort } = require("./insertionSort");
const {bubbleSort} = require('./bubbleSort')
const {mergeSort} = require('./mergeSort')
const {mergeSortBU} = require('./mergeSortBU')

let n = 13;

let orderArr = generateNearlyOrderedArray(n, 0)
let orderArrCopy = orderArr.slice()
let orderArrCopy1 = orderArr.slice()
let orderArrCopy2 = orderArr.slice()
let orderArrCopy3 = orderArr.slice()


testSort(selectionSort.name, selectionSort, orderArr);
testSort(insertionSort.name, insertionSort, orderArrCopy);
testSort(bubbleSort.name, bubbleSort, orderArrCopy1);
testSort(mergeSort.name, mergeSort, orderArrCopy2);
testSort(mergeSortBU.name, mergeSortBU, orderArrCopy2);

