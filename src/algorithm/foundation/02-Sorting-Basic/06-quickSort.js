const { swap, insertionSort15 } = require("./SortTestHelper");
var __partition = function (arr, l, r) {

  let temp = Math.floor(Math.random() * (r - l + 1)) + l
  swap(arr, l, temp)
  let v = arr[l],
    j = l;
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < v) {
      swap(arr, j + 1, i);
      j++;
    }
  }
  swap(arr, j, l);
  return j;
};

var __quickSort = function (arr, l, r) {
  // if (l >= r) return;
  // 优化点1
  if (r - l <= 15) {
    return insertionSort15(arr, l, r)
  }
  let p = __partition(arr, l, r);
  __quickSort(arr, l, p - 1);
  __quickSort(arr, p + 1, r);
};
var quickSort = function (arr) {
  __quickSort(arr, 0, arr.length - 1);
};

module.exports = {
  quickSort,
};
