var combinationSum4 = function (nums, target) {
  const dp = [1];
  nums = nums.sort((a, b) => a - b);
  for (let i = 1; i <= target; i++) {
    dp[i] = 0;
    for (let num of nums) {
      if (i < num) break;
      dp[i] += dp[i - num];
    }
  }
  return dp[target];
};

let ret = combinationSum4([1, 2, 3], 4);
console.log(ret);
