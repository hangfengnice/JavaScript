var pacificAtlantic = function (matrix) {
  if (matrix.length == 0 || matrix[0].length == 0) return [];
  let m = matrix.length,
    n = matrix[0].length;
  let pacific = Array(m)
    .fill()
    .map(() => []);
  let atlantic = Array(m)
    .fill()
    .map(() => []);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || j == 0) {
        dfs(pacific, i, j, matrix[i][j]);
      }
      if (i == m - 1 || j == n - 1) {
        dfs(atlantic, i, j, matrix[i][j]);
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] == 1 && atlantic[i][j] == 1) {
        res.push([i, j]);
      }
    }
  }
  return res;
  function dfs(aux, i, j, pre) {
    if (
      i < 0 ||
      j < 0 ||
      i == m ||
      j == n ||
      aux[i][j] == 1 ||
      matrix[i][j] < pre
    )
      return;
    aux[i][j] = 1;
    dfs(aux, i + 1, j, matrix[i][j]);
    dfs(aux, i, j + 1, matrix[i][j]);
    dfs(aux, i - 1, j, matrix[i][j]);
    dfs(aux, i, j - 1, matrix[i][j]);
  }
};
