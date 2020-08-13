function validPalindrome(s) {
  s = s.replace(/[^\w|\_]/g, "");
  let l = 0,
    r = s.length - 1;
  while (l < r) {
    if (s[l] == s[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
}
