function containerWithWater(height) {
  let l = 0,
    r = height.length - 1,
    ans = 0;
  while (l < r) {
    let area = Math.min(height[l], height[r]) * (r - l);
    let ans = Math.max(area, ans);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return ans;
}
