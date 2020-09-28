var solve = function (board) {
  let m = board.length;
  if (!m) return;
  let n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (
        (i == 0 || i == m - 1 || j == 0 || j == n - 1) &&
        board[i][j] == "O"
      ) {
        dfs(i, j);
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] == "O" && (board[i][j] = "X");
      board[i][j] == "#" && (board[i][j] = "O");
    }
  }
  function dfs(i, j) {
    if (i < 0 || i == m || j < 0 || j == n || board[i][j] != "O") return;
    board[i][j] = "#";
    dfs(i + 1, j);
    dfs(i, j + 1);
    dfs(i - 1, j);
    dfs(i, j - 1);
  }
};

// bfs

var solve = function (board) {
  let m = board.length;
  if (!m) return 0;
  let n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (
        (i == 0 || i == m - 1 || j == n - 1 || j == 0) &&
        board[i][j] == "O"
      ) {
        bfs(i, j);
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] == "O" && (board[i][j] = "X");
      board[i][j] == "#" && (board[i][j] = "O");
    }
  }
  function bfs(i, j) {
    console.log(i, j);
    let queue = [[i, j]];
    board[i][j] = "#";
    while (queue.length) {
      let cur = queue.shift();
      let x = cur[0];
      let y = cur[1];
      if (x - 1 >= 0 && board[x - 1][y] == "O") {
        queue.push([x - 1, y]);
        board[x - 1][y] = "#";
      }
      if (x + 1 < m && board[x + 1][y] == "O") {
        queue.push([x + 1, y]);
        board[x + 1][y] = "#";
      }
      if (y - 1 >= 0 && board[x][y - 1] == "O") {
        queue.push([x, y - 1]);
        board[x][y - 1] = "#";
      }
      if (y + 1 < n && board[x][y + 1] == "O") {
        queue.push([x, y + 1]);
        board[x][y + 1] = "#";
      }
    }
  }
};

let board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];
let ret = solve(board);
console.log(board);
