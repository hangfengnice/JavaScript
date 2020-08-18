function combinationSum(candidates, target) {
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
      temp.push(candidates[i]);
      dfs(residue - candidates[i], i, temp.slice());
      temp.pop();
    }
  }
}
