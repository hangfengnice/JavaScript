var moveZeros0 = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) res.push(nums[i]);
  }
  for (let i = 0; i < res.length; i++) {
    nums[i] = res[i];
  }
  for (let i = res.length; i < nums.length; i++) {
    nums[i] = 0;
  }
};

var moveZeros1 = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) nums[k++] = nums[i];
  }
  for (let i = k; i < nums.length; i++) {
    nums[i] = 0;
  }
};

var moveZeros2 = function (nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      if (i != k) [nums[i], nums[k]] = [nums[k], nums[i]];
      k++;
    }
  }
};
let test = [0, 1, 0, 3, 12];
moveZeros2(test);
console.log(test);
