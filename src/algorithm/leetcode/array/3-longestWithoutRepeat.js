// var lengthOfLongestSubstring = function (s) {
//   let freq = {},
//     l = 0,
//     r = -1,
//     res = 0,
//     len = s.length;

//   while (r < len) {
//     if (r + 1 < len && freq[s[r + 1]] == undefined) {
//       freq[s[++r]] = true;
//     } else {
//       freq[s[l++]] = undefined;
//     }
//     res = Math.max(res, r - l + 1);
//   }
//   return res;

// };

var lengthOfLongestSubstring = function (s) {
  let freq = {},
    l = 0,
    r = -1,
    res = 0,
    len = s.length;

  while (l < len) {
    if (r + 1 < len && freq[s[r + 1]] == undefined) {
      freq[s[++r]] = true;
    } else {
      freq[s[l++]] = undefined;
    }
    res = Math.max(res, r - l + 1);
  }

  return res;
};

let res = lengthOfLongestSubstring("abc");
console.log(res, "hello");

var lengthOfLongestSubstring1 = function (s) {
  const occ = new Set();
  const n = s.length;
  let rk = -1,
    ans = 0;
  for (let i = 0; i < n; i++) {
    if (i != 0) {
      occ.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      occ.add(s.charAt(rk + 1));
      ++rk;
    }
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};
