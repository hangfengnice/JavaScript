const { insertionSort15, swap } = require("./SortTestHelper");

var __partition2 = function (arr, l, r) {
  let temp = Math.floor(Math.random() * (r - l + 1)) + l;
  swap(arr, l, temp);
  let v = arr[l];

  let i = l + 1,
    j = r;

    [2, 3, 1, 2]
  while (true) {
    while (i <= r && arr[i] < v) i++;
    while (j >= l + 1 && arr[j] > v) j--;
    if (i > j) break;
    swap(arr, i, j);
    i++;
    j--;
  }
  swap(arr, l, j);
  return j;
};
var __quickSort2 = function (arr, l, r) {
  if (r - l <= 15) {
    return insertionSort15(arr, l, r);
  }

  let p = __partition2(arr, l, r);
  __quickSort2(arr, l, p - 1);
  __quickSort2(arr, p + 1, r);
};
var quickSort2 = function (arr) {
  __quickSort2(arr, 0, arr.length - 1);
};

module.exports = {
  quickSort2,
};
