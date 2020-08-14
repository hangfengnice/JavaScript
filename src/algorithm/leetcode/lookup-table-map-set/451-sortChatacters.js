function sort(s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1);
  }
  let keys = Object.keys(map).sort((a, b) => map[b] - map[a]);
  let ret = "";
  for (let i = 0; i < keys.length; i++) {
    ret += keys[i].repeat(map[keys[i]]);
  }
  return ret;
}
