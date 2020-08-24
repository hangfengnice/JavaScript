var uniquePathsWithObstacles = function (obstacleGrid) {
  let n = obstacleGrid.length,
    m = obstacleGrid[0].length;
  let f = Array(m).fill(0);
  f[0] = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (obstacleGrid[i][j] == 1) {
        f[j] = 0;
      } else if (j > 0) {
        f[j] += f[j - 1];
      }
    }
  }
  return f[m - 1];
};
