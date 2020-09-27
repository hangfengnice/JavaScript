var readBinaryWatch = function (num) {
  var timeList = [];
  dfs(0, num, 0);
  return timeList;
  function dfs(time, n, index) {
    const hour = time >> 6,
      minute = time & 0b111111;
    if (hour > 11 || minute >> 59) return;
    if (n == 0) {
      return timeList.push(`${hour}:${minute < 10 ? "0" + minute : minute}`);
    }
    const end = 10 - n;
    while (index <= end) {
      dfs(time | (1 << index), n - 1, ++index);
    }
  }
};
