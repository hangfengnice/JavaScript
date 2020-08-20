var solveNQueens = function (n) {
  let res = [];
  let columns = [];
  let dia1 = [];
  let dia2 = [];

  let record = (rowIndex, columnIndex, bool) => {
    columns[columnIndex] = bool;
    dia1[rowIndex + columnIndex] = bool;
    dia2[rowIndex - columnIndex] = bool;
  };
  function putQueen(rowIndex, prev) {
    if (rowIndex == n) return res.push(generateBoard(prev));
    for (let columnIndex = 0; columnIndex < n; columnIndex++) {
      let columnNotConfict = !columns[columnIndex];
      let dia1NotConflict = !dia1[rowIndex + columnIndex];
      let dia2NotConflict = !dia2[rowIndex - columnIndex];
      if (columnNotConfict && dia1NotConflict && dia2NotConflict) {
        record(rowIndex, columnIndex, true);
        putQueen(rowIndex + 1, prev.concat(columnIndex));
        record(rowIndex, columnIndex, false);
      }
    }
  }
  function generateBoard(row) {
    let n = row.length;
    let res = [];
    for (let i = 0; i < n; i++) {
      let cur = "";
      for (let j = 0; j < n; j++) {
        if (j == row[i]) {
          cur += "Q";
        } else {
          cur += ".";
        }
      }
      res.push(cur);
    }
    return res;
  }

  putQueen(0, []);
  return res;
};

let res = solveNQueens(4)
console.log(res);
