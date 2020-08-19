var permuteUnique = function (nums) {
  let res = [],
    used = {};
  nums = nums.sort((a, b) => a - b);
  dfs([]);
  return res;
  function dfs(subset) {
    if (subset.length == nums.length) return res.push(subset.slice());
    for (let i = 0; i < nums.length; i++) {
      if (used[i] || (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]))
        continue;
      used[i] = true;
      subset.push(nums[i]);
      dfs(subset);
      used[i] = false;
      subset.pop();
    }
  }
};
