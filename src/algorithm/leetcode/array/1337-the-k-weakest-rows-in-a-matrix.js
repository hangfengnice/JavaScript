var kWeakestRows = function (mat, k) {
  mat = mat.map((item) => item.reduce((acc, i) => (i ? acc + i : acc), 0));
  let ret = Object.entries(mat).sort((a, b) => a[1] - b[1]).map(item => +item[0]).slice(0, k)
  return ret
};

let test = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
];
let ret = kWeakestRows(test)
console.log(ret);
