var combinationSum = function (k, n) {
  let res = [];
  dfs([], 1, n);
  return res;
  function dfs(sub, begin, target) {
    if (sub.length == k && target == 0) return res.push(sub.slice());

    for (let i = begin; i <= 9; i++) {
      if (n - i < 0) break;
      sub.push(i);
      dfs(sub, i + 1, target - i);
      sub.pop();
    }
  }
};
let result = combinationSum(3, 9);
console.log(result);
