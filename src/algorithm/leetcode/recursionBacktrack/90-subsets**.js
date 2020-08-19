var subsetsWithDup = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let res = [];
  dfs(0, []);
  return res;
  function dfs(begin, subset) {
    res.push(subset.slice());
    for (let i = begin; i < nums.length; i++) {
      if (i > begin && nums[i] == nums[i - 1]) continue;
      subset.push(nums[i]);
      dfs(i + 1, subset);
      subset.pop();
    }
  }
};
