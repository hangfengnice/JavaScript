function reverseVowels(s) {
  s = s.split("");
  let l = 0,
    r = s.length - 1,
    reg = /[aoeiu]/i;
  while (l < r) {
    while (!reg.test(s[l])) {
      l++;
    }
    while (!reg.test(s[r])) {
      r--;
    }
    if (l < r) {
      let temp = s[l];
      s[l] = s[r];
      s[r] = temp;
      l++;
      r--;
    }
  }
  return s.join("");
}
