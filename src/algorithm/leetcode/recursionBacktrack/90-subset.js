function subsetWithDup(nums) {
  nums = nums.sort((a, b) => a - b);
  let ret = [];
  dfs(0, []);
  return ret;
  function dfs(start, temp) {
    ret.push(temp.slice());
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] == nums[i - 1]) {
        continue;
      }
      temp.push(nums[i]);
      dfs(i + 1, temp.slice());
      temp.pop();
    }
  }
}
