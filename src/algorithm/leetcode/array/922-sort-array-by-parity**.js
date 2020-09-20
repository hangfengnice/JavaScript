var sortArrayByParity = function (A) {
  let j = 1;
  for (let i = 0; i < A.length; i += 2) {
    if (A[i] % 2) {
      while (A[j] % 2) {
        j += 2;
      }
      [A[i], A[j]] = [A[j], A[i]];
    }
  }
  return A;
};
