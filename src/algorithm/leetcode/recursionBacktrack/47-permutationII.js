function permutation(nums) {
  nums = nums.sort((a, b) => a - b)
  let res = []
  let hash = {}
  function backtrack(temppath) {
    if (temppath.length == nums.length) return res.push(temppath.slice())
    for(let i = 0; i < nums.length; i ++) {
      if (hash[i] || (i > 0 && !hash[i - 1] && nums[i] == nums[i - 1])) continue
      hash[i] = true
      temppath.push(nums[i])
      backtrack(temppath.slice())
      hash[i] = false
      temppath.pop()
    }
  }
  backtrack([])
  return res
}

