var numIslans = function (grid) {
  let m = grid.length;
  if (!m) return 0;
  let n = grid[0].length;
  let visited = Array.from({ length: m }, () => Array.from({ length: n }));
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == "1" && !visited[i][j]) {
        res++;
        dfs(i, j);
      }
    }
  }
  return res;
  function dfs(i, j) {
    if (i < 0 || i == m || j == n || j < 0) return;
    if (!visited[i][j] && grid[i][j] == "1") {
      visited[i][j] = true;
      dfs(i + 1, j);
      dfs(i, j + 1);
      dfs(i - 1, j);
      dfs(i, j - 1);
    }
  }
};

let result = numIslans([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]);

console.log(result);
