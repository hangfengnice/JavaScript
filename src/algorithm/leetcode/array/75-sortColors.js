var sortColors = function (nums) {
  let l = -1,
    r = nums.length;
  for (let i = 0; i < r; ) {
    if (nums[i] == 1) {
      i++;
    } else if (nums[i] == 2) {
      r--;
      [nums[i], nums[r]] = [nums[r], nums[i]];
    } else {
      l++;
      [nums[l], nums[i]] = [nums[i], nums[l]];
      i++;
    }
  }
};
