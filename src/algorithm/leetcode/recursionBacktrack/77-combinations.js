var combine = function (n, k) {
  let res = [];
  dfs(1, []);
  return res;
  function dfs(start, subset) {
    if (subset.length == k) return res.push(subset.slice());
    // for (let i = start; i <= n; i++) { 这一行可以优化
    for (let i = start; i <= n - (k - subset.length) + 1; i++) {
      subset.push(i);
      dfs(i + 1, subset);
      subset.pop();
    }
  }
};
