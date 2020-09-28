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


var numIslands = function (grid) {
  let rows = grid.length;
  if (!rows) return 0;
  let cols = grid[0].length;
  let directions = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
  ];
  let marked = Array.from({ length: rows }, () => Array.from({ length: cols }));
  let count = 0;

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (!marked[i][j] && grid[i][j] == "1") {
              count++;
              let queue = [[i, j]];
              marked[i][j] = true;
              while (queue.length) {
                  let cur = queue.shift();
                  let curx = cur[0];
                  let cury = cur[1];

                  for (let k = 0; k < 4; k++) {
                      let newx = curx + directions[k][0];
                      let newy = cury + directions[k][1];

                      if (
                          inArea(newx, newy) &&
                          grid[newx][newy] == "1" &&
                          !marked[newx][newy]
                      ) {
                          queue.push([newx, newy]);
                          marked[newx][newy] = true;
                      }
                  }
              }
          }
      }
  }
  return count;

  function inArea(i, j) {
      return i >= 0 && i < rows && j >= 0 && j < cols;
  }
};


// var numIslands = function (grid) {
//   let m = grid.length
//   if (m == 0) return 0
//   let n = grid[0].length
//   let count = 0
//   let parent
// }
let result = numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]])
console.log(result);
