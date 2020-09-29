var pacificAtlantic = function (matrix) {
  let m = matrix.length;
  if (!m) return [];
  let n = matrix[0].length;
  let pacific = Array(m)
    .fill()
    .map(() => []);
  let atlantic = Array(m)
    .fill()
    .map(() => []);


  let res = [];
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
    console.log( pre);
    if (i < 0 || i == m || j < 0 || j == n || aux[i][j] == 1 || matrix[i][j] < pre) return;
    aux[i][j] = 1;
    dfs(aux, i + 1, j, matrix[i][j]);
    dfs(aux, i - 1, j, matrix[i][j]);
    dfs(aux, i, j + 1, matrix[i][j]);
    dfs(aux, i, j - 1, matrix[i][j]);
  }
};

let result = pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]])
console.log(result);
