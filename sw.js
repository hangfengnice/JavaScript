var findMaxConsecutiveOnes = function(nums) {
  let i = 0
  let j = 0
  let len = 0
  for(; j < nums.length; j ++) {
    if (!nums[j]) {
      len = Math.max(j - i, len)
      i = j + 1
    }else if (j == nums.length - 1) {
      console.log(i, j);
      len = Math.max(j - i, len)
    }
  }
  return len
};

let res = findMaxConsecutiveOnes([0 ,1,1, 0, 1, 1,1,0,1])
console.log(res, 'res');