// 二维数组中的查找
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix.length) return false;
  let rows = matrix.length,
    columns = matrix[0].length;

  let row = 0,
    column = columns - 1;

  while (row < rows && column >= 0) {
    let num = matrix[row][column];
    if (num == target) return true;
    if (num < target) row++;
    if (num > target) column--;
  }
  return false;
};
