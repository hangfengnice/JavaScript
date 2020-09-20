var numSpecial = function (mat) {
  let count = 0;
  let rows = mat.map((row) => row.reduce((acc, cur) => acc + cur, 0));

  let columns = Array(mat[0].length).fill(0);
  mat.forEach((row, index) => {
    row.forEach((c, cIndex) => {
      columns[cIndex] = columns[cIndex] + c;
    });
  });
  rows.forEach((r, index) => {
    if (r === 1 && columns[mat[index].findIndex((c) => c === 1)] === 1) count++;
  });
  return count;
};
