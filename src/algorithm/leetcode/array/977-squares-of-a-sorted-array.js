var sortedSquares = function (A) {
  return A.map((i) => i * i).sort((a, b) => a - b);
};

var sortedSquares1 = function (A) {
  let left = 0;
  let right = A.length - 1;
  let res = [];
  let index = right;
  while (left <= right) {
    let l = A[left] ** 2;
    let r = A[right] ** 2;
    if (l > r) {
      res[index--] = l;
      left++;
    } else {
      res[index--] = r;
      right--;
    }
  }
  return res;
};
