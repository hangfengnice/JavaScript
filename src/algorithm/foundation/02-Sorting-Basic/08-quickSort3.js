const { insertionSort15, swap } = require("./SortTestHelper");

var __quickSort3Ways = function (arr, l, r) {
  if (r - l <= 15) return insertionSort15(arr, l, r);
  let temp = Math.floor(Math.random() * (r - l + 1)) + l;
  swap(arr, temp, l);

  let v = arr[l];

  let lt = l; // arr[l + 1 ... lt] < v
  let gt = r + 1; // arr[gt ... r] > v
  let i = l + 1; // arr[lt + 1 ... i) == v

  // [3, 1, 5, 2, 3]  // 初始
  // [3, 1, 5, 2, 3]  // 第一步
  // [3, 1, 3, 2, 5]  // 初始
  // [3, 1, 3, 2, 5]  // 初始

  while (i < gt) {
    if (arr[i] < v) {
      swap(arr, i, lt + 1);
      lt++;
      i++;
    } else if (arr[i] > v) {
      swap(arr, gt - 1, i);
      gt--;
    } else {
      i++;
    }
  }
  swap(arr, l, lt);
  __quickSort3Ways(arr, l, lt - 1);
  __quickSort3Ways(arr, gt, r);
};

var quickSort3Ways = function (arr) {
  __quickSort3Ways(arr, 0, arr.length - 1);
};


module.exports = {
  quickSort3Ways
}
