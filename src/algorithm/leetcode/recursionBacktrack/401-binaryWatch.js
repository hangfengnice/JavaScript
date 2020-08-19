var readBinaryWatch = function (num) {
  let res = [];
  dfs(0, num, 0);
  return res;
  function dfs(time, n, index) {
    const hour = time >> 6,
      minute = time & 0b111111;
    if (hour > 11 || minute > 59) return;
    if (n == 0) {
      return res.push(`${hour}:${minute < 10 ? "0" + minute : minute}`);
    }
    const end = 10 - n;
    while (index <= end) {
      dfs(time | (1 << index), n - 1, ++index);
    }
  }
};

var readBinaryWatch = function (num) {
  let res = [];
  let count = function (n) {
    let res = 0;
    while (n != 0) {
      n = n & (n - 1);
      res++;
    }
    return res;
  };
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      if (count(i) + count(j) == num) {
        res.push(`${i}:${j < 10 ? "0" + j : j}`);
      }
    }
  }
  return res;
};
