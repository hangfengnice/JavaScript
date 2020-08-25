var coinChange = function (coins, amount) {
  if (amount < 1) return 0;
  var dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (var i = 0; i <= amount; i++) {
    for (r = 0; r < coins.length; r++) {
      if (coins[r] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[r]] + 1);
      }
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
};


let ret = coinChange([1, 5], 11)
console.log(ret);
