const {swap} = require('./SortTestHelper')

var insertionSort_ = function (arr) {
  for(let i = 1; i < arr.length; i ++) {
    for(let j = i; j > 0 && arr[j] < arr[j - 1]; j --) {
      swap(arr, j, j - 1)
    }
  }
}

var insertionSort = function (arr) {
  for(let i = 1; i < arr.length; i ++) {
    let e = arr[i], j;
    for(j = i; j > 0 && arr[j - 1] > e; j --) {
      arr[j] = arr[j - 1]
    }
    arr[j] = e
  }
}

module.exports = {
  insertionSort
}
