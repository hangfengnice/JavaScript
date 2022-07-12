function insertSort(arr, l, r) {
  for (let i = l + 1; i <= r; i++) {
    let e = arr[i];
    let j;
    for (j = i; j > l && arr[j - 1] > arr[j]; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
}
function mergeSort(arr) {
  __mergeSort(arr, [], 0, arr.length - 1);

  function __mergeSort(arr, aux, l, r) {
    // if (l >= r) return;
    if (r - l < 15) {
      return insertSort(arr, l, r);
    }
    let mid = l + ((r - l) >> 1);
    __mergeSort(arr, aux, l, mid);
    __mergeSort(arr, aux, mid + 1, r);
    if (arr[mid] < arr[mid + 1]) return;

    for (let i = l; i <= r; i++) {
      aux[i] = arr[i];
    }
    let i = l,
      j = mid + 1;
    for (let k = l; k <= r; k++) {
      if (i > mid) {
        arr[k] = aux[j++];
      } else if (j > r) {
        arr[k] = aux[i++];
      } else if (aux[i] < aux[j]) {
        arr[k] = aux[i++];
      } else {
        arr[k] = aux[j++];
      }
    }
  }
}

function mergeSortBU(arr) {
  let n = arr.length;

  let aux = [];
  for (let i = 1; i <= n; i += i) {
    for (let j = 0; j + i < n; j += i + i) {
      let mid = j + i - 1;
      let r = Math.min(j + i + i - 1, n - 1);

      let lx = j,
        rx = mid + 1;
      
      for (let k = j; k <= r; k++) {
        aux[k] = arr[k];
      }

      for (let k = j; k <= r; k++) {
        if (lx > mid) {
          arr[k] = aux[rx++];
        } else if (rx > r) {
          arr[k] = aux[lx++];
        } else if (aux[rx] < aux[lx]) {
          arr[k] = aux[rx++];
        } else {
          arr[k] = aux[lx++];
        }
      }
    }
  }
}

exports.mergeSort = mergeSort;
exports.mergeSortBU = mergeSortBU;
