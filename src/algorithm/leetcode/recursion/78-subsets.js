var subsets = function (nums) {
  let res = [];
  dfs([], 0);
  return res;
  function dfs(sub, begin) {
    res.push(sub.slice());
    for (let i = begin; i < nums.length; i++) {
      sub.push(nums[i]);
      dfs(sub, i + 1);
      sub.pop();
    }
  }
};

// 位
var subsets = function (nums) {
  const ans = [];
  const n = nums.length;
  for (let mask = 0; mask < 1 << n; mask++) {
    const t = [];
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        t.push(nums[i]);
      }
    }
    ans.push(t);
  }
  return ans;
};

// js api 实现
var subsets = function (nums) {
  return nums.reduce(
    (acc, cur) => acc.concat(acc.map((item) => item.concat(cur))),
    [[]]
  );
};
