var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 1; i <= arr.length; i += 2) {
    for (let j = 0; j + i <= arr.length; j++) {
      sum += arr.slice(j, j + i).reduce((acc, cur) => acc + cur, 0);
    }
  }
  return sum;
};
