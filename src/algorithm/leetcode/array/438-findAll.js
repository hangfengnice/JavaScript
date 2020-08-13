function findAll(s, p) {
  if (!s || !p) return []

  let need = {}, window = {}, ans = [];
  [...p].forEach(c => need[c] ? need[c] ++ : need[c] = 1)
  let l = 0, r = 0, cnt = 0, nklen = Object.keys(need).length
  while(l < s.length) {

  }
}
