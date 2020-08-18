var combinationSum3 = function (k, n) {
  let res = [];
  dfs(n, 1, []);
  return res;
  function dfs(residue, begin, temp) {
    if (residue == 0 && temp.length == k) {
      return res.push(temp.slice());
    }

    for (let i = begin; i <= 9; i++) {
      if (residue - i < 0) break;
      temp.push(i);
      dfs(residue - i, i + 1, temp.slice());
      temp.pop();
    }
  }
};
