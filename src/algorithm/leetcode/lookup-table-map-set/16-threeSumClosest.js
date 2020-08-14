function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let best = 10000;
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum == target) {
        return target;
      }
      if (Math.abs(sum - target) - Math.abs(best - target) < 0) {
        best = sum;
      }
      if (sum > target) {
        r--;
        while (l < r && nums[r] == nums[r + 1]) r--;
      } else {
        l++;
        while (l < r && nums[l] == nums[l - 1]) l++;
      }
    }
  }
  return best;
}

let ret = threeSumClosest([-1, 2, 1, -4], 1);
console.log(ret);
