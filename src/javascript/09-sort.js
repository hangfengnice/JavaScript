function quickSort(arr) {
  // 交换元素
  function swap(arr, a, b) {
      var temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
  }

  function partition(arr, left, right) {
      var pivot = arr[left];
      var storeIndex = left;

      for (var i = left + 1; i <= right; i++) {
          if (arr[i] < pivot) {
              swap(arr, ++storeIndex, i);
          }
      }

      swap(arr, left, storeIndex);

      return storeIndex;
  }

  function sort(arr, left, right) {
    // debugger
      if (left < right) {
          var storeIndex = partition(arr, left, right);
          sort(arr, left, storeIndex - 1);
          sort(arr, storeIndex + 1, right);
      }
  }

  sort(arr, 0, arr.length - 1);

  return arr;
}

console.log(quickSort([6, 7, 3, 4, 1, 5, 9, 2, 8]))
