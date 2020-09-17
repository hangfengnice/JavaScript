var threeConsecutiveOdds = function (arr) {
  for (let i = 0; i <= arr.length - 3; i++) {
    if (arr[i] & 1 && arr[i + 1] & 1 && arr[i + 2] & 1) return true;
  }
  return false;
};

var threeConsecutiveOdds1 = function (arr) {
  let l = 0,
    r = 0,
    n = arr.length;
  for (; r < n; r++) {
    if (arr[r] % 2 == 0) {
      if (r - l >= 3) return true;
      l = r + 1;
    }
  }
  if (r - l >= 3) return true;
  return false;
};

let test = [2, 6, 4, 1];
let test1 = [1, 2, 34, 3, 4, 5, 7, 23, 12];

let result = threeConsecutiveOdds1(test);
console.log(result);
