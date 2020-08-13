function minSize(s, nums) {
  let l = 0,
    r = -1,
    sum = 0,
    res = nums.length + 1;
  while (l < nums.length) {
    if (r + 1 < nums.length && sum < s) {
      sum += nums[++r];
    } else {
      sum -= nums[l++];
    }
    if (sum >= s) {
      res = Math.min(res, r - l + 1);
    }
  }
  if (res == nums.length + 1) return 0
  return res;
}

let ret = minSize(7, [1, 2 ,2,2, 4, 3, 1 ,1])
console.log(ret);
