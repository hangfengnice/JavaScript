const restoreIpAddresses = (s) => {
  const res = [],
    len = s.length;
  if (s.length < 4 || s.length > 12) return res;
  dfs([], 0);
  return res;

  function dfs(subres, start) {
    if (subres.length == 4 && start == len) {
      return res.push(subres.join("."));
    }
    if (subres.length == 4 && start < len) {
      return;
    }
    for (let i = 1; i <= 3; i++) {
      if (start + i > len) return;
      if (i != 1 && s[start] == "0") return;

      let str = s.slice(start, start + i);
      if (i == 3 && +str > 255) return;

      subres.push(str);
      dfs(subres, start + i);
      subres.pop();
    }
  }
};

let result = restoreIpAddresses("0000");

console.log(result);
