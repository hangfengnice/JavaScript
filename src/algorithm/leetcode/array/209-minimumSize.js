var minSubArrayLen = function (s, nums) {
  let n = nums.length;
  if (n == 0) {
    return 0;
  }
  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += nums[j];
      if (sum >= s) {
        ans = Math.min(j - i + 1, ans);
        break;
      }
    }
  }
  return ans;
};

var minSubArrayLen1 = function (s, nums) {
  let n = nums.length;
  if (n == 0) return 0;
  let ans = Number.MAX_SAFE_INTEGER;
  let start = 0,
    end = 0;
  let sum = 0;
  while (end < n) {
    sum += nums[end];
    while (sum >= s) {
      ans = Math.min(ans, end - start + 1);
      sum -= nums[start++];
    }
    end++;
  }
  return ans;
};

let ret = minSubArrayLen1(7, [1, 2, 2, 2, 4, 3, 1, 1]);
console.log(ret);
