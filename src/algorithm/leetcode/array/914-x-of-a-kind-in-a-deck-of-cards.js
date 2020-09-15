// 卡牌分组

var hasGroupsSizeX = function (deck) {
  if (deck.length <= 1) return false;

  let timeMap = new Map();
  deck.forEach((i) => {
    let value = timeMap.get(i);
    timeMap.set(i, value ? ++value : 1);
  });
  let timeArr = [...timeMap.values()];

  let g = timeArr[0];

  timeArr.forEach((time) => (g = gcd(g, time)));

  return g >= 2;
  function gcd(num1, num2) {
    return num2 == 0 ? num1 : gcd(num2, num1 % num2);
  }
};

var res = hasGroupsSizeX([1, 1]);
console.log(res);
