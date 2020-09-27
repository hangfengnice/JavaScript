var subsets = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let res = [];
  dfs(res, 0);
  return res;
  function dfs(sub, begin) {
    res.push(sub.slice());
    for (let i = begin; i < nums.length; i++) {
      if (i > begin && nums[i] == nums[i - 1]) continue;
      sub.push(nums[i]);
      dfs(sub, i + 1);
      sub.pop();
    }
  }
};
