function minimumWindowString(s, t) {
  let minLen = Number.MAX_SAFE_INTEGER,
    resL;
  let map = {};
  let missType = 0;
  for (let char of t) {
    if (!map[char]) {
      missType++;
      map[char] = 1;
    } else {
      map[char]++;
    }
  }

  let left = 0,
    right = 0;
  for (; right < s.length; right++) {
    let rightChar = s[right];
    if (map[rightChar] !== undefined) map[rightChar]--;
    if (map[rightChar] == 0) missType--;
    while (missType == 0) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        resL = left;
      }
      let leftchar = s[left];
      if (map[leftchar] !== undefined) map[leftchar]++;
      if (map[leftchar] > 0) missType++;
      left++;
    }
  }
  return s.substring(resL, resL + minLen);
}
