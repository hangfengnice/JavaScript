var xorOperation = function (n, start) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(start + 2 * i);
  }
  return arr.reduce((prev, cur) => prev ^ cur);
};

let ret = xorOperation(5, 0);
console.log(ret);
