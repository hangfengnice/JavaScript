var combinationSum2 = function (candidates, target) {
  let res = [];
  candidates = candidates.sort((a, b) => a - b);
  dfs([], 0, target);
  return res;
  function dfs(sub, begin, target) {
    if (target == 0) return res.push(sub.slice());
    for (let i = begin; i < candidates.length; i++) {
      let num = candidates[i];
      if (target - num < 0) break;
      if (i > begin && candidates[i] == candidates[i - 1]) continue;
      sub.push(num);
      dfs(sub, i + 1, target - num);
      sub.pop();
    }
  }
};
