var canPartition = function (nums) {
  let len = nums.length;
  if (len == 0) return false;
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  if (sum & 1) return false;

  let target = sum / 2;
  let dp = Array(target + 1).fill(false)
  dp[0] = true
  if (nums[0] <= target) dp[nums[0]] = true

  for(let i = 1; i < len; i ++) {
    for(let j = target; nums[i] <= j; j --) {
      if (dp[target]) return true

      dp[j] = dp[j] || dp[j - nums[i]]
    }
  }
  return dp[target]
};

let ret = canPartition([1, 5, 5, 11])
console.log(ret)
