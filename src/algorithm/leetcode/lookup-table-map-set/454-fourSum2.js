function fourSum(A, B, C, D) {
  let map = {},
    ret = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      map[A[i] + B[j]] ? map[A[i] + B[j]]++ : (map[A[i] + B[j]] = 1);
    }
  }

  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      if (map[0 - (C[i] + D[j])]) {
        ret += map[0 - (C[i] + D[j])];
      }
    }
  }
  return ret;
}
