const { swap } = require("./sortTestHelper");

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i ++) {
//     for (j = i; j > 0 && arr[j] < arr[j - 1]; j --) {
//         swap(arr, j, j - 1)
//     }
//   }
// }

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i ++) {
    let e = arr[i], j;
    for (j = i; j > 0 && arr[j - 1] > e; j --) {
      arr[j] = arr[j - 1]
    }
    arr[j] = e
  }
}
const shortInsertionSort = (arr, l, r) => {
  for (let i = l + 1; i <= r; i ++) {
    let e = arr[i], j;
    for (j = i; j > l && arr[ j - 1] > e; j --) {
      arr[j] = arr[j - 1]
    }
    arr[j] = e
  }
}

module.exports = {
  insertionSort,
  shortInsertionSort
}
