var partition = function (s) {
  let res = [];
  if (s.length == 0) return res;
  findPalindrome(0, []);
  return res;
  function findPalindrome(start, subset) {
    if (start == s.length) {
      return res.push(subset.slice());
    }
    for (let i = start; i < s.length; i++) {
      let str = s.substring(start, i + 1);
      if (str && isPalindrome(str)) {
        subset.push(str);
        findPalindrome(i + 1, subset);
        subset.pop();
      }
    }
  }
  function isPalindrome(s) {
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
