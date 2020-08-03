const {selectionSort} = require('./selectionSort')
const {insertionSort} = require('./insertionSort')
const {bubbleSort} = require('./bubbleSort')
const {mergeSort} = require('./mergeSort')
const {sortTestHelper, generateNearlyOrderedArray, testSort} = require('../../utils')
const { merge } = require('jquery')

let arr = sortTestHelper(10000, 3, 8)
let arr1 = arr.slice()
let arr2 = arr.slice()
let arr3 = arr.slice()
let arr4 = arr.slice()

// let sortArr = generateNearlyOrderedArray(10000, 8)
// let sortArr1 = sortArr.slice()
// let sortArr2 = sortArr.slice()
// let sortArr3 = sortArr.slice()


testSort(selectionSort.name, selectionSort, arr)
testSort(insertionSort.name, insertionSort, arr1)
testSort(bubbleSort.name, bubbleSort, arr2)
testSort(mergeSort.name, mergeSort, arr3)
