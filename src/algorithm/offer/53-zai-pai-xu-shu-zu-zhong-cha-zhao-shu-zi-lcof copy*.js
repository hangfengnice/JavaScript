var search = function (nums, target) {
  return nums.filter(i => i == target)
}


var search1 = function (nums, target) {
  let i = 0, j = nums.length - 1
  while(i <= j) {
    let m = Math.floor((i + j) / 2)
    if (nums[m] <= target) i = m + 1
    else j = m - 1
  }
  let right = i
  console.log(right)

  if (j >= 0 && nums[j] != target) return 0
  i = 0
  while(i <= j) {
    let m = Math.floor((i + j) / 2)
    if (nums[m] < target) i = m + 1
    else j = m - 1
  }
  let left = j
  console.log(left)
  return right - left - 1

}

let arr = [1, 3, 3, 8, 8,8, 9]

let ret = search1(arr, 8)
console.log(ret)
