const { fromJS } = require("immutable");

// 数组中重复的数字
var findRepeatNumber = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) return nums[i];
    else map[nums[i]] = true;
  }
};

var findRepeatNumber1 = function (nums) {
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    while ((num = nums[i]) !== i) {
      if (num == nums[num]) {
        return num;
      }
      [nums[i], nums[num]] = [nums[num], nums[i]];
    }
  }
};
