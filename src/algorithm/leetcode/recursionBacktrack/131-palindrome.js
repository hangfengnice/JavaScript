var partition = function (s) {
  let res = [];
  if (s.length == 0) return res;
  findPalindRome(0, s, res, []);
  return res;
  function findPalindRome(start, s, res, curArr) {
    if (start == s.length) {
      res.push(curArr);
      return;
    }
    for (let i = start; i < s.length; i++) {
      let subStr = s.slice(start, i + 1);
      if (subStr && isPal(subStr)) {
        findPalindRome(i + 1, s, res, [...curArr, subStr]);
      }
    }
  }

  function isPal(str) {
    let l = 0,
      r = str.length - 1;
    while (l < r) {
      if (str[l] != str[r]) return false;
      l++;
      r--;
    }
    return true;
  }
};
