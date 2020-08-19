var exist = function (board, word) {
  if (board.length == 0) return false;
  if (word.length == 0) return true;
  let row = board.length,
    col = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (find(i, j, 0)) return true;
    }
  }
  return false;
  function find(i, j, cur) {
    if (i >= row || i < 0 || j >= col || j < 0) return false;
    let now = board[i][j];
    if (now != word[cur]) return false;
    if (cur == word.length - 1) return true;
    board[i][j] = null;
    let res =
      find(i + 1, j, cur + 1) ||
      find(i, j + 1, cur + 1) ||
      find(i - 1, j, cur + 1) ||
      find(i, j - 1, cur + 1);
    board[i][j] = now;
    return res;
  }
};
