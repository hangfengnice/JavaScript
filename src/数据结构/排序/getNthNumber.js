const { swap } = require("./sortTestHelper");

function _partition(arr, l, r) {
  swap(arr, l, Math.floor(Math.random() * (r - l + 1) + l));
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < arr[l]) {
      swap(arr, i, ++j);
    }
  }
  swap(arr, l, j);
  return j;
}
function _selection(arr, l, r, k) {
  if (l == r) return arr[l];
  let p = _partition(arr, l, r);
  if (k == p) {
    return arr[p];
  } else if (k < p) {
    return _selection(arr, l, p - 1, k);
  } else {
    return _selection(arr, p + 1, r, k);
  }
}
function selection(arr, n, k) {
  console.assert(k >= 0 && k < n, "k 不符合预期");
  return _selection(arr, 0, n - 1, k);
}
function getKthNumber(arr, k) {
  return selection(arr, arr.length, k - 1);
}

let arr = [1, 2, 3, 4, 2 ,3 ,4, 8 ,8, 9];
let ret = getKthNumber(arr, 9);
console.log(ret);
