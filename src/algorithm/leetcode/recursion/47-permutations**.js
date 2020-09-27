var premute = function (nums) {
  let len = nums.length,
    res = [];
  if (!len) return res;
  let visited = {};
  nums = nums.sort((a, b) => a - b);

  dfs([]);
  return res;
  function dfs(sub) {
    if (sub.length == len) {
      return res.push(sub.slice());
    }
    for (let i = 0; i < len; i++) {
      if (visited[i] || (i > 0 && nums[i] == nums[i - 1] && !visited[i - 1]))
        continue;
      visited[i] = true;
      sub.push(nums[i]);
      dfs(sub);
      visited[i] = undefined;
      sub.pop();
    }
  }
};

let result = premute([1, 1, 2]);
console.log(result);
