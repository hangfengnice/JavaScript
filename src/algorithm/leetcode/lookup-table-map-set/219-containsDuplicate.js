const { set } = require("lodash");

function containsDuplicate(nums, k) {
  let s = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (s.has(nums[i])) {
      return true;
    }
    s.add(nums[i]);
    if (s.size > k) {
      s.delete(nums[i - k]);
    }
  }
  return false;
}
