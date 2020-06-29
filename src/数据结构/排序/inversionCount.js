function _merge(arr, l, mid, r) {
  let aux = new Array(r - l + 1);
  for (let i = l; i <= r; i++) {
    aux[i - l] = arr[i];
  }
  let res = 0;
  let j = l,
    k = mid + 1;
  for (let i = l; i <= r; i++) {
    if (j > mid) {
      arr[i] = aux[k - l];
      k++;
    } else if (k > r) {
      arr[i] = aux[j - l];
      j++;
    } else if (aux[j - l] <= aux[k - l]) {
      arr[i] = aux[j - l];
      j++;
    } else {
      arr[i] = aux[k - l];
      k++;
      res += mid - j + 1;
    }
  }
  return res;
}
function _inversionCount(arr, l, r) {
  if (l >= r) return 0;
  let mid = Math.floor((r - l) / 2 + l);
  let res1 = _inversionCount(arr, l, mid);
  let res2 = _inversionCount(arr, mid + 1, r);
  return res1 + res2 + _merge(arr, l, mid, r);
}
function inversionCount(arr) {
  return _inversionCount(arr, 0, arr.length - 1);
}

let arr = [1, 2];
let count = inversionCount(arr);
console.log(count);
