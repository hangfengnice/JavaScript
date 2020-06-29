const {swap} = require('./sortTestHelper')

function _partition2(arr, l, r) {
  swap(arr, l, Math.floor(Math.random() * (r - l + 1) + l))
  let v = arr[l]
  let i = l + 1, j = r
  while(true) {
    while(i <= r && arr[i] < v) i ++
    while(j >= l + 1 && arr[j] > v) j --
    if (i > j) break
    swap(arr, i, j)
    i ++
    j --
  }
  swap(arr, l, j)
  return j
}

function _quickSort2(arr, l, r) {
  // if (r - l <= 15) {
  //   shortInsertionSort(arr, l, r);
  //    return
  // }
  if (l >= r) return
  let p = _partition2(arr, l, r);
  _quickSort2(arr, l, p - 1);
  _quickSort2(arr, p + 1, r);
}
function quickSortBetter(arr) {
  _quickSort2(arr, 0, arr.length - 1);
}
module.exports = {
  quickSortBetter
}
