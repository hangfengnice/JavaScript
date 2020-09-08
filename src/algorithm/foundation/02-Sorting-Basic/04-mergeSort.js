var __merge = function (arr, l, mid, r) {
  let aux = Array(r - l + 1)
  for(let i = l; i <= r; i ++) {
    aux[i - l] = arr[i]
  }
  let i = l, j = mid + 1
  for(let k = l; k <= r; k ++) {
    if (i > mid) {
      arr[k] = aux[j - l]
      j ++
    } else if (j > r) {
      arr[k] = aux[i - l]
      i ++
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l]
      i ++
    } else {
      arr[k] = aux[j - l]
      j ++
    }
  }
}
var __mergeSort = function (arr, l, r) {
  if (l >= r) return
  let mid = Math.floor((l + r) / 2)
  __mergeSort(arr, l, mid)
  __mergeSort(arr, mid + 1, r)

  // 优化的点1
  if (arr[mid] > arr[mid + 1]) {
    __merge(arr, l, mid, r)
  }

}
var mergeSort = function (arr) {
  __mergeSort(arr, 0, arr.length - 1)
}

module.exports = {
  mergeSort
}
