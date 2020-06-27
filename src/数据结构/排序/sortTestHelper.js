function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function generateRandomArray(n, rangeL, rangeR) {
  console.assert(rangeL <= rangeR, '左边的值需要不大于右边')
  return Array.from({length: n}, _ => Math.floor(Math.random() * (rangeR - rangeL + 1) + rangeL))
}

function testSort (name, sort, arr) {
  console.time(name)
  sort(arr)
  console.timeEnd(name)
}

module.exports = {
  swap,
  generateRandomArray,
  testSort
};
