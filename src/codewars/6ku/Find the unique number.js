function findUniq(arr) {
  let obj = {};
  arr.forEach((item) => {
    obj[item] ? obj[item]++ : (obj[item] = 1);
  });
  let arr1 = Object.keys(obj).filter((item) => obj[item] == 1);
  return arr1[0];
}
var findUniq = function (arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
};

var findUniq = function (arr) {
  return arr.find(item => arr.indexOf(item) == arr.lastIndexOf(item))
}
let ret = findUniq([3, 10, 3, 3, 3]);
console.log(ret);
