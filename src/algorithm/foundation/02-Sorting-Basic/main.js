const {
  generateRandomArray,
  generateNearlyOrderedArray,
  TestSort
} = require('./SortTestHelper')

const {selectionSort} = require('./01-SelectionSort')
const {insertionSort} = require('./02-InsertionSort')
const {bubbleSort} = require('./03-bubbleSort')
const {mergeSort} = require('./04-mergeSort')
const {mergeSortBu} = require('./05-mergeSortBu')
const {quickSort} = require('./06-quickSort')

let arr1 = generateRandomArray(1000000, 0, 100000)
let arr2 = arr1.slice()
let arr3 = arr1.slice()
let arr4 = arr1.slice()
let arr5 = arr1.slice()
let arr6 = arr1.slice()

// let ord1 = generateNearlyOrderedArray(2000, 0)
// let ord2 = ord1.slice()
// let ord3 = ord1.slice()
// let ord4 = ord1.slice()
// let ord5 = ord1.slice()
// let ord6 = ord1.slice()


// TestSort(selectionSort, arr1)
// TestSort(insertionSort, arr2)
TestSort(mergeSort, arr4)
TestSort(quickSort, arr6)

//  近乎有序的排序
// TestSort(selectionSort, ord1)
// TestSort(insertionSort, ord2)
// TestSort(mergeSort, ord4)
// TestSort(mergeSortBu, ord5)
// TestSort(quickSort, ord6)
