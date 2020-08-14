function fourSums(nums, target) {
  nums.sort((a, b) => a - b);
  let ret = [];
  for (let a = 0; a < nums.length - 3; a++) {
    if (a > 0 && nums[a] == nums[a - 1]) continue;
    for (let b = a + 1; b < nums.length - 2; b++) {
      if (b > a + 1 && nums[b] == nums[b - 1]) continue;
      let l = b + 1;
      let r = nums.length - 1;
      while (l < r) {
        if (nums[a] + nums[b] + nums[l] + nums[r] == target) {
          ret.push([nums[a], nums[b], nums[l], nums[r]]);
          l++;
          r--;
          while (l < r && nums[l] == nums[l - 1]) l++;
          while (l < r && nums[r] == nums[r + 1]) r--;
        } else if (nums[a] + nums[b] + nums[l] + nums[r] > target) {
          r--;
        } else {
          l++;
        }
      }
    }
  }
  return ret;
}

let ret = fourSums([1,-2,-5,-4,-3,3,3,5], -11)
console.log(ret);
