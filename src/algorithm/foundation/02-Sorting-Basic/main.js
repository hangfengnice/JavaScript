const {
  generateRandomArray,
  generateNearlyOrderedArray,
  TestSort
} = require('./SortTestHelper')

const {selectionSort} = require('./01-SelectionSort')
const {insertionSort} = require('./02-InsertionSort')
const {bubbleSort} = require('./03-bubbleSort')
const {mergeSort} = require('./04-mergeSort')

let arr1 = generateRandomArray(1000, 0, 3)
let arr2 = arr1.slice()
let arr3 = arr1.slice()
let arr4 = arr1.slice()

let ord1 = generateNearlyOrderedArray(50000, 0)
let ord2 = ord1.slice()
let ord3 = ord1.slice()
let ord4 = ord1.slice()


// TestSort(selectionSort, arr1)
// TestSort(insertionSort, arr2)
// TestSort(mergeSort, arr4)

//  近乎有序的排序
TestSort(selectionSort, ord1)
TestSort(insertionSort, ord2)
TestSort(mergeSort, ord4)
