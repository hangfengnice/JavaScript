const { shortInsertionSort } = require("./insertionSort");

function partition(arr, l, r) {
  let v = arr[l];
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < v) {
      [arr[i], arr[j + 1]] = [arr[j + 1], arr[i]];
      j++;
    }
  }
  [arr[l], arr[j]] = [arr[j], arr[l]];
  return j;
}
function _quickSort(arr, l, r) {
  // if (r - l <= 15) {
  //   shortInsertionSort(arr, l, r);
  //    return
  // }
  if (l >= r) return
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
