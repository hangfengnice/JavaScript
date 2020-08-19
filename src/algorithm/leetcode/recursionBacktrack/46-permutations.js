var permute = function (nums) {
  let res = [],
    visited = {};
  dfs([]);
  return res;
  function dfs(subset) {
    if (subset.length == nums.length) {
      return res.push(subset.slice());
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i] == undefined) {
        subset.push(nums[i]);
        visited[i] = true;
        dfs(subset);
        subset.pop();
        visited[i] = undefined;
      }
    }
  }
};
