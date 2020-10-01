var firstUniqChar = function (s) {
  if (!s) return " ";
  for (let i = 0; i < s.length; i++) {
    if (s.lastIndexOf(s[i]) == s.indexOf(s[i])) return s[i];
  }
  return " ";
};
// map
var firstUniqChar = function (s) {
  if (!s) return " ";
  let map = new Map();
  for (let i of s) {
    map.set(i, (map.get(i) || 0) + 1);
  }
  for (let [k, v] of map) {
    if (v == 1) return k;
  }
  return " ";
};
