function twoSum(nums, target) {
  let l = 0, r = nums.length - 1
  while(l < r) {
    if (nums[l] + nums[r] == target) {
      return [nums[l], nums[r]]
    } else if (nums[l] + nums[r] < target) {
      l ++
    } else {
      r --
    }
  }
}
