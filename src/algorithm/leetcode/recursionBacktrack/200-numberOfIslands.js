var numIslands = function (grid) {
  let res = 0;
  let row = grid.length;
  if (row == 0) return 0;
  let col = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == "1") {
        dfs(i, j);
        res++;
      }
    }
  }
  return res;
  function dfs(i, j) {
    if (i < 0 || i > row - 1 || j < 0 || j > col - 1 || grid[i][j] == "0")
      return;
    grid[i][j] = "0";
    dfs(i + 1, j);
    dfs(i, j + 1);
    dfs(i - 1, j);
    dfs(i, j - 1);
  }
};

let res = numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]);

console.log(res);
