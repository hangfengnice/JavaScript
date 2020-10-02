var numJewelsInStones = function (J, S) {
  let j = new Set(J),
    num = 0;
  for (let s of S) {
    if (j.has(s)) num++;
  }
  return num;
};
