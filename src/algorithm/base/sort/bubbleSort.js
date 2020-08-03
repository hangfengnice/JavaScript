const { swap } = require("../../utils");

function bubbleSort(arr) {
  let swapped,
    n = arr.length;
  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i, i - 1);
        swapped = true;
      }
    }
    n--;
  } while (swapped);
}
module.exports = {
  bubbleSort
};
