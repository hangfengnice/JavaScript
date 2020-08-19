var combinationSum = function (candidates, target) {
  let res = [];
  candidates = candidates.sort((a, b) => a - b);
  dfs([], 0, target);
  return res;
  function dfs(subset, begin, target) {
    if (target == 0) {
      return res.push(subset.slice());
    }
    for (let i = begin; i < candidates.length; i++) {
      if (target - candidates[i] < 0) break;
      subset.push(candidates[i]);
      dfs(subset, i, target - candidates[i]);
      subset.pop();
    }
  }
};
