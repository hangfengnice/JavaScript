const {
  generateRandomArray,
  testSort
} = require('./sortTestHelper')
const {selectionSort} = require('./selectionSort')

let n = 1000
let arr = generateRandomArray(n, 0, n)

testSort(selectionSort.name, selectionSort, arr)


