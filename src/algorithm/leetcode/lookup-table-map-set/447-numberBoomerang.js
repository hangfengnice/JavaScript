function numberBoomerang(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let map = new Map();
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        let div = dic(nums[i], nums[j]);
        map.get(div) ? map.set(div, map.get(div) + 1) : map.set(div, 1);
      }
    }
    map.forEach((val, key) => {
      res += val * (val - 1);
    });
  }
  return res;
}
function dic(a, b) {
  return Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2);
}
