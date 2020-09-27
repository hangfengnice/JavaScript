var exist = function (board, word) {
  let row = board.length;
  if (!row) return false;
  if (!word.length) return true;
  let col = board[0].length;

  let marked = Array.from({ length: row }, () => Array.from({ length: col }));

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (find(i, j, 0)) return true;
    }
  }
  return false;
  function find(i, j, cur) {
    if (i == row || i < 0 || j < 0 || j == col || marked[i][j]) return false;
    if (board[i][j] != word[cur]) return false;
    if (cur == word.length - 1) return true;
    marked[i][j] = true;
    let res =
      find(i + 1, j, cur + 1) ||
      find(i, j + 1, cur + 1) ||
      find(i - 1, j, cur + 1) ||
      find(i, j - 1, cur + 1);

    marked[i][j] = false;
    return res;
  }
};
