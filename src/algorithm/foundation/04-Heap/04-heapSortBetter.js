const { swap } = require("./helper");


var __shiftDown = function (arr, n, k) {
  while(2 * k + 1 < n) {
    let j = 2 * k + 1
    if (j + 1 < n && arr[j + 1] > arr[j]) {
      j += 1
    }
    if (arr[k] >= arr[j]) {
      break
    }
    swap(arr, k, j)
    k = j
  }
}
var helpSort = function (arr) {
  let n = arr.length
  for(let i = ~~((n - 1) / 2); i >= 0; i --) {
    __shiftDown(arr, n, i)

  }
  for(let i = n - 1; i > 0; i --) {
    swap(arr, 0, i)
    __shiftDown(arr, i, 0)
  }
}

module.exports = {
  helpSort
}
