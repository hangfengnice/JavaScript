// const {
//   copyArray,
//   _merge,
//   generateNearlyOrderedArray,
//   generateRandomArray,
// } = require("./sortTestHelper");
function _merge(arr, l, mid, r) {
  let aux = new Array(r - l + 1);
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
let arr = [1, 3, 2];

function mergeSortBU(arr, n) {
  console.log(n)
  for (let sz = 1; sz <= n; sz += sz) {
    for (let i = 0; i + sz < n; i += sz + sz) {
      _merge(arr, i, i + sz - 1, Math.min(i + sz + sz - 1, n));
    }

  }
}


function _mergeSort(arr, l, r) {
  if (l >= r) return;
  let mid = Math.floor((l + r) / 2);
  _mergeSort(arr, l, mid);
  _mergeSort(arr, mid + 1, r);

  // 优化 近乎有序
  if (arr[mid] > arr[mid + 1]) {
    _merge(arr, l, mid, r);
  }
}
function mergeSort(arr) {
  _mergeSort(arr, 0, arr.length - 1);
}


mergeSort(arr, arr.length - 1);
console.log(arr);
