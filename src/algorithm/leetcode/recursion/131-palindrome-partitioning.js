var partition = function (s) {
  let res = [],
    len = s.length;
  if (len == 0) return res;
  dfs(0, []);
  return res;

  function dfs(start, subres) {
    if (start == len) {
      return res.push(subres.slice());
    }
    for (let i = start; i < len; i++) {
      let str = s.slice(start, i + 1);
      if (str && isPalindRome(str)) {
        subres.push(str);
        dfs(i + 1, subres);
        subres.pop();
      }
    }
  }
  function isPalindRome(s) {
    let l = 0,
      r = s.length - 1;
    while (l < r) {
      if (s[l] != s[r]) return false;
      l++;
      r--;
    }
    return true;
  }
};
