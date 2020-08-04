const { swap, insertionSort15 } = require("../../utils");

function partition(arr, l, r) {
  swap(arr, Math.floor(Math.random() * (r - l + 1)) + l, l)
  let v = arr[l];
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < v) {
      swap(arr, j + 1, i);
      j++;
    }
  }
  swap(arr, l, j);
  return j;
}
function _quickSort(arr, l, r) {
  if (r - l <= 15) {
    return insertionSort15(arr, l, r);
  }
  let p = partition(arr, l, r);
  _quickSort(arr, l, p - 1);
  _quickSort(arr, p + 1, r);
}
function quickSort(arr) {
  _quickSort(arr, 0, arr.length - 1);
}

module.exports = {
  quickSort,
};
