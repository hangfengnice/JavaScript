var removeDuplicates = function (nums) {
  let j = 1,
    count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i - 1]) {
      count++;
    } else {
      count = 1;
    }

    if (count <= 2) {
      nums[j++] = nums[i];
    }
  }
  return j;
};


var removeDuplicates1 = function (nums) {
  let n = nums.length
  if (n < 3) return n
  let j = 1
  for(let i = 2; i < n; i ++) {
    if (nums[i] != nums[j - 1]) {
      nums[++ j] = nums[i]
    }
  }
  return j + 1
}

var removeDuplicates2 = function (nums) {
  let i = 0
  for(let n of nums) {
    if (i < 2 || n > nums[i - 2]) nums[i ++] = n
  }
  return i
}
