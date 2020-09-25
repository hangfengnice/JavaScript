var sortByBits = function (arr) {
  return arr.sort(
    (a, b) =>
      (a.toString(2).match(/1/g) || []).length -
      (b.toString(2).match(/1/g) || []).length || a - b
  );
};

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let result = sortByBits(arr);
console.log(result);
