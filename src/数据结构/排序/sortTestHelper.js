function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function generateRandomArray(n, rangeL, rangeR) {
  console.assert(rangeL <= rangeR, "左边的值需要不大于右边");
  return Array.from({ length: n }, (_) =>
    Math.floor(Math.random() * (rangeR - rangeL + 1) + rangeL)
  );
}

const generateNearlyOrderedArray = (n, swapTimes) => {
  let arr = Array.from({ length: n }, (_, i) => i);

  for (let i = 0; i < swapTimes; i++) {
    let posx = Math.floor(Math.random() * n);
    let posy = Math.floor(Math.random() * n);
    swap(arr, posx, posy);
  }
  return arr;
};

function testSort(name, sort, arr) {
  console.time(name);
  sort(arr);
  console.timeEnd(name);
  console.assert(isSorted(arr), "非有序");
}

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}

module.exports = {
  swap,
  generateRandomArray,
  generateNearlyOrderedArray,
  testSort,
};
