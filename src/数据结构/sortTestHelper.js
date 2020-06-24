// 交换元素
function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}

// 随机数组
function generateRandomArray(n, rangeL, rangeR) {
  let arr = new Array(n)
  for (let i = 0; i < n; i ++) {
    arr[i] = Math.floor(Math.random() * (rangeR - rangeL + 1) + rangeL)
  }
  return arr
}

// 近似有序的数组
function generateNearlyOrderedArray(n, swaptimes) {
  let arr = Array.from({length: n}, (_, i) => i)
  for (let i = 0; i < swaptimes; i ++) {
    let posx = Math.floor(Math.random() * n)
    let posy = Math.floor(Math.random() * n)
    swap(arr, posx, posy)
  }
  return arr
}

// 打印数组
function printArray(arr) {
  for (let i = 0; i < arr.length; i ++) {
    console.log(arr[i])
  }
}

// 测试排序是否正确
function isSorted(arr) {
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i + 1] < arr[i]) return false
  }
  return true
}

// 测试运行时间
function testSort(sortName, sort, arr) {
  console.time(sortName);
  sort(arr)
  console.timeEnd(sortName);
  console.assert(isSorted(arr), '不是有序的')
}

// 复制数组
function copyArray(arr) {
  return arr.slice()
}

module.exports = {
  swap,
  generateRandomArray,
  generateNearlyOrderedArray,
  printArray,
  testSort,
  copyArray
}
