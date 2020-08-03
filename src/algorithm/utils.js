function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
function sortTestHelper(n, rangeL, rangeR) {
  return Array.from(
    { length: n },
    () => Math.floor(Math.random() * (rangeR - rangeL + 1)) + rangeL
  );
}
function generateNearlyOrderedArray(n, swaptimes) {
  arr = new Array({length: n}, (_, i) => i)
  for(let i = 0; i < swaptimes; i ++) {
    let swapx = Math.floor(Math.random() * n)
    let swapy = Math.floor(Math.random() * n)
    swap(arr, swapx, swapy)
  }
  return arr
}
function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}
function testSort(sortName, sort, arr) {
  console.time(sortName);
  sort(arr);
  console.timeEnd(sortName);
  console.assert(isSorted(arr), `${sortName} 排序错误！`);
}

module.exports = {
  swap,
  sortTestHelper,
  generateNearlyOrderedArray,
  testSort,
};
