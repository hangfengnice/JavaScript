const { swap } = require("./SortTestHelper");

var __partition = function (arr, l, r) {
  let p = Math.floor(Math.random() * (r - l + 1)) + l;
  swap(arr, l, p);
  let j = l; //[l+1...j] < p ; [lt+1..i) > p
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < arr[l]) {
      swap(arr, i, ++j);
    }
  }
  swap(arr, l, j);
  return j;
};

var __selection = function (arr, l, r, k) {
  if (l == r) return arr[l];

  // partition之后, arr[p]的正确位置就在索引p上
  let p = __partition(arr, l, r);

  if (k == p)
    // 如果 k == p, 直接返回arr[p]
    return arr[p];
  else if (k < p)
    // 如果 k < p, 只需要在arr[l...p-1]中找第k小元素即可
    return __selection(arr, l, p - 1, k);
  // 如果 k > p, 则需要在arr[p+1...r]中找第k-p-1小元素
  // 注意: 由于我们传入__selection的依然是arr, 而不是arr[p+1...r],
  //       所以传入的最后一个参数依然是k, 而不是k-p-1
  else return __selection(arr, p + 1, r, k);
};

var selection = function (arr, k) {
  return __selection(arr, 0, arr.length - 1, k);
};

var res = selection([3, 2, 1, 5, 3], 1);
console.log(res);
