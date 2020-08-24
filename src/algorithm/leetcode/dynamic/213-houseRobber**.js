var rob = function (nums) {
  var n = nums.length;
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return nums[0];
  }

  function dfs(arr) {

    var dp = Array(n - 1);
    dp[0] = 0;
    dp[1] = arr[0];
    console.log(dp[1], 'dp');
    for (let i = 2; i < n; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i - 1]);
    }
    return dp[n - 1];
  }
  let need1 = dfs(nums.slice(1));
  let need2 = dfs(nums.slice(0, -1));
  return Math.max(need1, need2);
};

let ret = rob([1, 2])
console.log(ret);
