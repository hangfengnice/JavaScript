const {swap} = require('./sortTestHelper')

function _quickSort3Ways(arr, l, r) {
  if (l >= r) return

  swap(l, Math.floor(Math.random() * (r - l + 1) + l))
  let v = arr[l]
  let lt = l
  let gt = r + 1
  let i = l + 1
  while(i < gt) {
    if (arr[i] < v) {
      swap(arr, i, lt + 1)
      lt ++
      i ++
    } else if (arr[i] > v) {
      swap(arr, i, gt - 1)
      gt --
    } else {
      i ++
    }
  }
  swap(arr, l, lt)
  _quickSort3Ways(arr, l, lt - 1)
  _quickSort3Ways(arr, gt, r)
}
function quickSort3Ways(arr) {
  _quickSort3Ways(arr, 0, arr.length - 1)
}
module.exports = {
  quickSort3Ways
}
