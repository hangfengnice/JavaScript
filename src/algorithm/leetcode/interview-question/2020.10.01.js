var merge = function (A, m, B, n) {
  let all = m + n - 1;
  while (m > 0 && n > 0) {
    if (A[m - 1] > B[n - 1]) {
      A[all--] = A[m - 1];
      m--;
    } else {
      A[all--] = B[n - 1];
      n--;
    }
  }
  while (n > 0) {
    A[all--] = B[n - 1];
    n--;
  }
  return A;
};

let A = [1, 2, 3, 0, 0, 0],
  m = 3,
  B = [2, 5, 6],
  n = 3;

let result = merge(A, m, B, n)
console.log(result);
