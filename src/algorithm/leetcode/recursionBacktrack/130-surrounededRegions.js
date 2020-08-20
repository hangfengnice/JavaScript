var solve = function (board) {
  let m = board.length;
  if (m == 0) return;
  let n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
        if (board[i][j] == "O") {
          dfs(i, j);
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == "NO") board[i][j] = "O";
      else if (board[i][j] == "O") board[i][j] = "X";
    }
  }

  function dfs(i, j) {
    if (i < 0 || i == m || j < 0 || j == n || board[i][j] !== "O") return;
    board[i][j] = "NO";
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }
};
