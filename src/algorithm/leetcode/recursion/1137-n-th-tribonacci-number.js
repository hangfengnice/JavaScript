var tribonacci = function (n) {
  if (n < 3) return n == 0 ? 0 : 1;
  let tmp,
    x = 0,
    y = 1,
    z = 1;
  for (let i = 3; i <= n; i++) {
    tmp = x + y + z;
    x = y;
    y = z;
    z = tmp;
  }
  return z;
};

// 递归
var tribonacci = function (n) {
  const map = [0, 1, 1];
  return recursion(n);
  function recursion(n) {
    if (map[n] != undefined) return map[n];
    map[n] = recursion(n - 1) + recursion(n - 2) + recursion(n - 3);
    return map[n];
  }
};
