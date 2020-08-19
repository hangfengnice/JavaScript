var combinationSum2 = function (candidates, target) {
  let res = [];
  candidates = candidates.sort((a, b) => a - b);
  dfs(target, 0, []);
  return res;
  function dfs(target, begin, subset) {
    if (target == 0) return res.push(subset.slice());
    for (let i = begin; i < candidates.length; i++) {
      if (target - candidates[i] < 0) break;
      if (i > begin && candidates[i] == candidates[i - 1]) continue;
      subset.push(candidates[i]);
      dfs(target - candidates[i], i + 1, subset);
      subset.pop();
    }
  }
};
