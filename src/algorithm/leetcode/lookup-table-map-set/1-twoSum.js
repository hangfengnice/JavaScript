function twoSum(nums, target) {
  let map = {}
  let ret = []
  for(let i = 0; i < nums.length; i ++) {
    map[target - nums[i]] ? ret.push([nums[i], target - nums[i]]) : map[nums[i]] = true
  }
  return ret
}
