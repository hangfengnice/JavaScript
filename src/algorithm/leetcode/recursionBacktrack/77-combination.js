function combine(n, k) {
  let ret = [];
  function backtrack(start, temp) {
    if (temp.length == k) {
      return ret.push(temp.slice());
    }
    for (let i = start; i <= n; i++) {
      temp.push(i);
      backtrack(i + 1, temp.slice());
      temp.pop();
    }
  }
  backtrack(1, []);
  return ret;
}
