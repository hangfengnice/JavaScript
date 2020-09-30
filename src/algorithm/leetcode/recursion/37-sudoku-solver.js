var solveSudoku = function (board) {
  fill(0, 0);
  return board;
  function fill(i, j) {
    if (j == 9) {
      i++;
      j = 0;
      if (i == 9) return true;
    }

    if (board[i][j] != ".") return fill(i, j + 1);
    for (let num = 1; num <= 9; num++) {
      if (hasConflit(i, j, String(num))) continue;
      board[i][j] = String(num);
      if (fill(i, j + 1)) return true;
      board[i][j] = ".";
    }
    return false;
  }

  function hasConflit(r, c, val) {
    for (let i = 0; i < 9; i++) {
      if (board[i][c] == val || board[r][i] == val) return true;
    }
    const subRowStart = Math.floor(r / 3) * 3;
    const subColStart = Math.floor(c / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (val == board[subRowStart + i][subColStart + j]) {
          return true;
        }
      }
    }
    return false;
  }
};

var solveSudoku = function (board) {
  const rows = Array(9);
  const cols = Array(9);
  const blocks = Array(9);
  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < 9; i++) {
    rows[i] = new Set(options);
    cols[i] = new Set(options);
    blocks[i] = new Set(options);
  }
  const getBlockIndex = function (i, j) {
    return (((i / 3) | 0) * 3 + j / 3) | 0;
  };
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let str = board[i][j];
      if (str != ".") {
        rows[i].delete(str);
        cols[j].delete(str);
        blocks[getBlockIndex(i, j)].delete(str);
      }
    }
  }
  fill(0, 0);
  return board;
  function fill(i, j) {
    if (j == 9) {
      i++;
      j = 0;
      if (i == 9) return true;
    }
    if (board[i][j] != ".") return fill(i, j + 1);
    const blackIndex = getBlockIndex(i, j);
    for (let num = 1; num <= 9; num++) {
      const s = String(num);
      if (!rows[i].has(s) || !cols[j].has(s) || !blocks[blackIndex].has(s))
        continue;
      board[i][j] = s;
      rows[i].delete(s);
      cols[j].delete(s);
      blocks[blackIndex].delete(s);

      if (fill(i, j + 1)) return true;
      board[i][j] = ".";
      rows[i].add(s);
      cols[j].add(s);
      blocks[blackIndex].add(s);
    }
    return false;
  }
};
