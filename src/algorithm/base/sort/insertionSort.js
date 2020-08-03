const {swap} = require('../../utils')

function insertionSort(arr) {
  for(let i = 1; i < arr.length; i ++) {
    let e = arr[i], j = i
    for(; j > 0 && e < arr[j - 1]; j --) {
      arr[j] = arr[j - 1]
    }
    arr[j] = e
  }
}
module.exports = {
  insertionSort
}
