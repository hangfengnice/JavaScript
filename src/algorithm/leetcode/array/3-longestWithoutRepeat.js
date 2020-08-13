function longestWithoutRepeat(s) {
  let freq = {},
    l = 0,
    r = -1,
    res = 0;
  console.log(s.length);
  while (l < s.length) {
    if (r + 1 < s.length && freq[s[r + 1]] == undefined) {
      freq[s[++r]] = true;
    } else {
      freq[s[l++]] = undefined;
    }
    res = Math.max(res, r - l + 1);
  }
  return res;
}
