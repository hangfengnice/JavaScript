function validAnagram(s, t) {
  if (s.length != t.length) return false;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1);
    if (!map[t[i]]) {
      map[t[i]] = 0;
    }
    map[t[i]]--;
  }
  for (let i in map) {
    if (map[i] != 0) {
      return false;
    }
  }
  return true;
}
