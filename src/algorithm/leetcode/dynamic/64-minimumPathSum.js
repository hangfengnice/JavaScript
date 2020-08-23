function minPathSum(grid) {
  if (grid == null || grid.length == 0 || grid[0].length == 0) {
    return 0;
  }
  let rows = grid.length,
    columns = grid[0].length;
  let dp = Array(rows)
    .fill()
    .map(() => []);
  dp[0][0] = grid[0][0];
  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < columns; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[rows - 1][columns - 1];
}

var minPathSum = function (grid) {
  var dp = Array(grid.length);
  for (var i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i != 0 && j != 0) {
        dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j];
      } else if (i == 0 && j != 0) {
        dp[j] = dp[j - 1] + grid[i][j];
      } else if (i != 0 && j == 0) {
        dp[j] = dp[j] + grid[i][j];
      } else if (i == 0 && j == 0) {
        dp[j] = grid[i][j];
      }
    }
  }
  return dp[grid[0].length - 1];
};

let ret = minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
console.log(ret);
