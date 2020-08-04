const {selectionSort} = require('./selectionSort')
const {insertionSort} = require('./insertionSort')
const {bubbleSort} = require('./bubbleSort')
const {mergeSort} = require('./mergeSort')
const {mergeSortBu} = require('./mergeSortBu')
const {quickSort} = require('./quickSort')

const {sortTestHelper, generateNearlyOrderedArray, testSort} = require('../../utils')
const { merge } = require('jquery')

let arr = generateNearlyOrderedArray(1000, 10)
let arr1 = arr.slice()
let arr2 = arr.slice()
let arr3 = arr.slice()
let arr4 = arr.slice()
let arr5 = arr.slice()
let arr6 = arr.slice()
let arr7 = arr.slice()

// let sortArr = generateNearlyOrderedArray(10000, 8)
// let sortArr1 = sortArr.slice()
// let sortArr2 = sortArr.slice()
// let sortArr3 = sortArr.slice()


// testSort(selectionSort.name, selectionSort, arr)
// testSort(insertionSort.name, insertionSort, arr1)
// testSort(bubbleSort.name, bubbleSort, arr2)
testSort(mergeSort.name, mergeSort, arr3)
// testSort(mergeSortBu.name, mergeSortBu, arr4)
testSort(quickSort.name, quickSort, arr5)

