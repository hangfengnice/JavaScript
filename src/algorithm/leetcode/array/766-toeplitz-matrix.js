// toeplitz-matrix

const { fromJS } = require("immutable");

var isToeplitzMatrix = function (matrix) {
  let groups = new Map();
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (!groups.has(r - c)) {
        groups.set(r - c, matrix[r][c]);
      } else if (groups.get(r - c) != matrix[r][c]) {
        return false;
      }
    }
  }
  return true;
};

var isToeplitzMatrix1 = function (matrix) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (r > 0 && c > 0 && matrix[r][c] !== matrix[r - 1][c - 1]) return false;
    }
  }
  return true;
};
