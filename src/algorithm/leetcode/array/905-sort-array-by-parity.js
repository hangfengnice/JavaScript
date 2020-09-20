var sortArrayByParity = function (A) {
  let r = A.length - 1;
  let l = 0;
  while (l < r) {
    while (l < r && A[l] % 2 == 0) {
      l++;
    }
    while (l < r && A[r] % 2) {
      r--;
    }

    if (l >= r) break;

    [A[l], A[r]] = [A[r], A[l]];
  }
  return A;
};
