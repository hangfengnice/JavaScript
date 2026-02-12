var search = function (nums, target) {
  let n = nums.length
  if (n == 0) return -1

  if (n == 1) return nums[0] == target ? 0 : -1

  let l = 0, r = n - 1
  while(l <= r) {
    let mid = (l + r) >> 1
    if (nums[mid] == target) return mid

    if (nums[0] < target) {
      if (nums[0]<= target && target < nums[mid]) {
        r= mid - 1
      } else {
        l = mid + 1
      }
    } else {
      
    }
  }
  return -1
}