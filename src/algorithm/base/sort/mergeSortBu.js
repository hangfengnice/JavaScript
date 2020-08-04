function _merge(arr, l, mid, r) {
  let aux = Array(r - l + 1);
  for (let i = l; i <= r; i++) {
    aux[i - l] = arr[i];
  }
  let i = l;
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
function mergeSortBu(arr) {
  for(let sz = 1; sz <= arr.length - 1; sz += sz) {
    for(let i = 0; i + sz < arr.length; i += sz + sz) {
      _merge(arr, i, i + sz - 1, Math.min(i + sz + sz - 1, arr.length - 1))
    }
  }
}

module.exports = {
  mergeSortBu
}
