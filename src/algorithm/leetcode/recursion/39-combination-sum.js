var combinationSum = function (candidates, target) {
  let res = [];
  candidates = candidates.sort((a, b) => a - b);
  dfs([], 0, target);
  return res;

  function dfs(sub, begin, target) {
    if (target == 0) return res.push(sub.slice());

    for (let i = begin; i < candidates.length; i++) {
      if (target - candidates[i] < 0) break;
      sub.push(candidates[i]);
      dfs(sub, i, target - candidates[i]);
      sub.pop();
    }
  }
};

let result = combinationSum([2, 2, 3, 7], 7)
console.log(result);
