function shellSort(arr) {
  let n = arr.length;

  let h = 1;
  while (h < n / 3) {
    h = 3 * h + 1;
  }

  while (h >= 1) {
    for (let i = h; i < n; i++) {
      let e = arr[i];

      let j;
      for (j = i; j >= h && arr[j - h] > e; j -= h) {
        arr[j] = arr[j - h];
      }
      arr[j] = e;
    }
    h = Math.floor(h / 3);
  }
}

exports.shellSort = shellSort;
