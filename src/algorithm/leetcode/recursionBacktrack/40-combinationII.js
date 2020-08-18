var combinationSum2 = function (candidates, target) {
  let res = [];
  candidates = candidates.sort((a, b) => a - b);
  dfs(target, 0, []);
  return res;
  function dfs(residue, begin, temp) {
    if (residue == 0) {
      return res.push(temp.slice());
    }

    for (let i = begin; i < candidates.length; i++) {
      if (residue - candidates[i] < 0) break;
      if (i > begin && candidates[i] == candidates[i - 1]) {
        continue;
      }
      temp.push(candidates[i]);
      dfs(residue - candidates[i], i + 1, temp.slice());
      temp.pop();
    }
  }
};
