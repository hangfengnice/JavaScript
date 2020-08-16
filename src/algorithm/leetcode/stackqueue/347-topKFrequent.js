function kFrequent(nums, k) {
  let map = {};
  nums.forEach((item) => (map[item] ? map[item]++ : (map[item] = 1)));
  return Object.keys(map)
    .sort((a, b) => map[b] - map[a])
    .slice(0, k)
    .map((item) => +item);
}
