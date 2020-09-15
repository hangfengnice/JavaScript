var transpose = function (A) {
  return Array.from({ length: A[0].length }, (_, i) => A.map((v) => v[i]));
};
