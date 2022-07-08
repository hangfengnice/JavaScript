const { swap } = require("./helper");

function bubbleSort(arr) {
  let swapped;
  let n = arr.length;

  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i - 1, i);
        swapped = true;
      }
    }
    n--;
  } while (swapped);
}
exports.bubbleSort = bubbleSort;
