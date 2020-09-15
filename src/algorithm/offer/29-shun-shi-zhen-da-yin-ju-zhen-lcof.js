var spiralOrder = function (matrix) {
  if (!matrix || matrix.length == 0 || matrix[0].length == 0) return [];
  let visited = Array.from({ length: matrix.length }, (_, i) =>
    matrix[i].map(() => false)
  );
  let total = matrix.length * matrix[0].length;
  let rows = matrix.length,
    columns = matrix[0].length;
  let order = Array(total);
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let directionIndex = 0;
  let row = 0,
    column = 0;
  for (let i = 0; i < total; i++) {
    order[i] = matrix[row][column];
    visited[row][column] = true;

    let nextRow = row + directions[directionIndex][0],
      nextColumn = column + directions[directionIndex][1];
    if (
      nextRow < 0 ||
      nextRow >= rows ||
      nextColumn < 0 ||
      nextColumn >= columns ||
      visited[nextRow][nextColumn]
    ) {
      directionIndex = (directionIndex + 1) % 4;
    }
    row += directions[directionIndex][0];
    column += directions[directionIndex][1];
  }
  return order;
};

var spiralOrder1 = function (matrix) {
  if (matrix.length == 0) return [];
  const res = [];

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    if (top > bottom || left > right) break;

    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }
  return res;
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let result = spiralOrder1(matrix);
console.log(result);
