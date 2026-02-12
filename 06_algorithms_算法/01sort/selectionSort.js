const { swap } = require("./helper");

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIndx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndx]) {
        minIndx = j;
      }
    }
    swap(arr, i, minIndx);
  }
}

function selectionSortBetter(arr) {
  let l = 0,
    r = arr.length - 1;
  while (l < r) {
    let minIdx = l;
    let maxIdx = r;

    if (arr[minIdx] > arr[maxIdx]) {
      swap(arr, minIdx, maxIdx);
    }

    for (let i = l + 1; i < r; i++) {
      if (arr[i] < arr[minIdx]) {
        minIdx = i;
      } else if (arr[i] > arr[maxIdx]) {
        maxIdx = i;
      }
    }
    swap(arr, l, minIdx);
    swap(arr, r, maxIdx);
    l++;
    r--;
  }
}

exports.selectionSort = selectionSort;
exports.selectionSortBetter = selectionSortBetter;
