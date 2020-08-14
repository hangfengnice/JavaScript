function isIsomorphic(s, t) {
  return s.split("").reduce((res, ele, index) => {
    if (s.indexOf(s[index]) != t.indexOf(t[index])) {
      return false;
    } else {
      return res;
    }
  }, true);
}
function isomorphicHelper(s, t) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    let c1 = s[i];
    let c2 = t[i];
    if (map[c1] != undefined) {
      if (map[c1] != c2) {
        return false;
      }
    } else {
      map[c1] = c2;
    }
  }
  return true;
}

function isomorphic1(s, t) {
  if (s.length != t.length) return false;
  return isomorphicHelper(s, t) && isomorphicHelper(t, s);
}

function isomorphic2Helper(s) {
  let map = {};
  let ret = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] == undefined) {
      map[s[i]] = i + 1;
      ret.push(i + 1);
    }
  }
  return ret + "";
}

function isomorphic2(s, t) {
  if (s.length != t.length) return false;
  return isomorphic2Helper(s) == isomorphic2Helper(t);
}

function isomorphic3(s, t) {
  let mapS = {};
  let mapT = {};
  for (let i = 0; i < s.length; i++) {
    let c1 = s[i];
    let c2 = t[i];
    if (mapS[c1] != mapT[c2]) {
      return false;
    } else {
      if (mapS[c1] == undefined) {
        mapS[c1] = 1;
        mapT[c2] = 1;
      }
    }
  }
  return true;
}
