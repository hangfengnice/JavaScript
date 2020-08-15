function containsDuplicates(nums, k, t) {
  let s = new Set();
  for (let i = 0; i < nums.length; i++) {
    let res = [...s].filter((v) => Math.abs(nums[i] - v) <= t);
    if (res) return true;
    else {
      s.add(nums[i]);
    }
    if (s.size > k) {
      s.delete(nums[i - k]);
    }
  }
}
