var combine = function (n, k) {
  let res = [];
  dfs(1, []);
  return res;
  function dfs(start, sub) {
    if (sub.length == k) return res.push(sub.slice());

    for (let i = start; i <= n - (k - sub.length) + 1; i++) {
      sub.push(i);
      dfs(i + 1, sub);
      sub.pop();
    }
  }
};

// 选跟不选
var combine = function (n, k) {
  let res = [];
  if (k <= 0 || n < k) return res;
  dfs(1, k, []);
  return res;
  function dfs(start, k, sub) {
    if (!k) return res.push(sub.slice());
    if (start > n - k + 1) return;

    dfs(start + 1, k, sub);

    sub.push(start);
    dfs(start + 1, k - 1, sub);
    sub.pop();
  }
};
