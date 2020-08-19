var combinationSum3 = function (k, n) {
  let res = [];
  dfs(n, 1, []);
  return res;
  function dfs(target, begin, subset) {
    if (target == 0 && subset.length == k) return res.push(subset.slice());
    for (let i = begin; i <= 9; i++) {
      if (target - i < 0) break;
      subset.push(i);
      dfs(target - i, i + 1, subset);
      subset.pop();
    }
  }
};
