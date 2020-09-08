var swap = function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

var generateRandomArray = function (n, l, r) {
  return Array.from(
    { length: n },
    (_, i) => Math.floor(Math.random() * (r - l + 1)) + l
  );
};

var generateNearlyOrderedArray = function (n, swapTimes) {
  let arr = Array.from({length: n}, (_, i) => i)
  for(let i = 0; i < swapTimes; i ++) {
    let posx = Math.floor(Math.random() * n)
    let posy = Math.floor(Math.random() * n)
    swap(arr, posx, posy)
  }
  return arr
}

var isSorted = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};
var TestSort = function (func, arr) {
  console.time(func.name);
  func(arr);
  console.timeEnd(func.name);
  console.assert(isSorted(arr), `${func.name} 排序有问题`);
};

module.exports = {
  TestSort,
  swap,
  generateRandomArray,
  generateNearlyOrderedArray
}
