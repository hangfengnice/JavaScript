const { normalizeUnits } = require("moment");

var permute = function (nums) {
  let res = [],
    len = nums.length,
    visited = {};
  if (!len) return res;
  dfs([]);
  return res;
  function dfs(sub) {
    if (sub.length == len) {
      return res.push(sub.slice());
    }

    for (let i = 0; i < len; i++) {
      let num = nums[i];
      if (!visited[num]) {
        visited[num] = true;
        sub.push(num);
        dfs(sub);
        visited[num] = false;
        sub.pop();
      }
    }
  }
};

const permute = (nums) => {
  let len = nums.length,
    res = [];
  if (!len) return res;
  let visited = {};
  dfs([]);
  return res;
  function dfs(sub) {
    if (sub.length == len) {
      return res.push(sub.slice());
    }
    for (let num of nums) {
      if (visited[num]) continue;
      visited[num] = true;
      sub.push(num);
      dfs(sub);
      visited[num] = undefined;
      sub.pop();
    }
  }
};
