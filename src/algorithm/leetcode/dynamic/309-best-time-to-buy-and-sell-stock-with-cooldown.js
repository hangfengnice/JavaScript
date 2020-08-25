var maxProfit = function (prices) {
  let n = prices.length;
  if (n == 0) return 0;
  let dp_i_0 = 0;
  let dp_i_1 = -Infinity;
  let dp_pre = 0;
  for (var i = 0; i < n; i++) {
    let tmp = dp_i_0;
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, dp_pre - prices[i]);
    dp_pre = tmp;
  }
  return dp_i_0;
};
