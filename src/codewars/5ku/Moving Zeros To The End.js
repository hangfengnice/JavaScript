var moveZeros = function (arr) {
  let ret = [],
    count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    } else {
      ret.push(arr[i]);
    }
  }
  for (let i = 0; i < count; i++) {
    ret.push(0);
  }
  return ret;
};

var moveZeros = function (arr) {
  return [...arr.filter((i) => i !== 0), ...arr.filter((i) => i === 0)];
};

let ret = moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);

console.log(ret);
