function sortColors(nums) {
  let zero = -1,
    two = nums.length;
  for (let i = 0; i < two; ) {
    if (nums[i] == 1) {
      i++;
    } else if (nums[i] == 2) {
      two--;
      [nums[two], nums[i]] = [nums[i], nums[two]];
    } else {
      zero++;
      [nums[i], nums[zero]] = [nums[zero], nums[i]];
      i++;
    }
  }
}
