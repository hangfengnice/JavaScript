var sumEvenAfterQueries = function (A, queries) {
  let ret = [];
  for (let i = 0; i < queries.length; i++) {
    let index = queries[i][1];
    A[index] = A[index] + queries[i][0];
    ret[i] = A.reduce((acc, i) => (i % 2 == 0 ? acc + i : acc), 0);
  }
  return ret;
};

var sumEvenAfterQueries1 = function (A, queries) {
  let result = [],
    sum = 0;
  for (let i = 0; i < A.length; i++) {
    if (i % 2 == 0) {
      sum += A[i];
    }
  }
  for (let i = 0; i < queries.length; i++) {
    let index = queries[i][1];
    if (index % 2 == 0) sum -= A[index];

    A[index] += queries[i][0];
    if (A[index] % 2 == 0) sum += A[index];

    result.push(sum);
  }
  return result;
};
