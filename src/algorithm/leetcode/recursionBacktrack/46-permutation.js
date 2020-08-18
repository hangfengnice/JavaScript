function permutation(nums) {
  const ret = [];
  const used = {};
  dfs([]);
  function dfs(path) {
    if (path.length == nums.length) {
      ret.push(path.slice())
      return
    }
    for (let num of nums) {
      if (used[num]) continue;
      path.push(num);
      used[num] = true;
      dfs(path);
      path.pop();
      used[num] = false;
    }
  }
  return ret;
}

let ret = permutation([1, 2, 3])
console.log(ret);
