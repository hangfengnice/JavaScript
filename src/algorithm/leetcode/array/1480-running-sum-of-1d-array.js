var runningSum = function (nums) {
  return nums.map((_, i) =>
    [...nums].slice(0, i + 1).reduce((acc, cur) => acc + cur, 0)
  );
};
