var divingBoard = function (shorter, longer, k) {
  if (k == 0) return [];
  if (shorter == longer) return [k * shorter];
  let res = [];
  for (let i = 0; i <= k; i++) {
    res.push(longer * i + (k - i) * shorter);
  }
  return res;
};
