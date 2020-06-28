const { shortInsertionSort } = require("./insertionSort");

function _merge(arr, l, mid, r) {
  let aux = Array.from({ length: r - l + 1 });
  for (let i = l; i <= r; i++) {
    aux[i - l] = arr[i];
  }
  let i = l,
    j = mid + 1;
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j - l];
      j++;
    } else if (j > r) {
      arr[k] = aux[i - l];
      i++;
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l];
      i++;
    } else {
      arr[k] = aux[j - l];
      j++;
    }
  }
}
function _mergeSort(arr, l, r) {
  if (r - l <= 15) {
    return shortInsertionSort(arr, l, r);
  }
  let mid = Math.floor((l + r) / 2);
  _mergeSort(arr, l, mid);
  _mergeSort(arr, mid + 1, r);
  if (arr[mid] > arr[mid + 1]) {
    _merge(arr, l, mid, r); // 优化
  }
}
function mergeSort(arr, n = arr.length) {
  _mergeSort(arr, 0, n - 1);
}

module.exports = {
  mergeSort,
};
