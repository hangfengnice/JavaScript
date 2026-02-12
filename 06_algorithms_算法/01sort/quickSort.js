function quickSort(arr) {
  __quickSort(arr, 0, arr.length - 1);

  function partition(arr, l, r) {
    let t = Math.floor(Math.random() * (r - l + 1)) + l;
    swap(arr, l, t);
    let v = arr[l];
    let j = l;

    for (let i = l + 1; i <= r; i++) {
      if (arr[i] < v) {
        swap(arr, j + 1, i);
        j++;
      }
    }
    swap(arr, l, j);
    return j;
  }
  function __quickSort(arr, l, r) {
    if (l >= r) return;
    let p = partition(arr, l, r);
    __quickSort(arr, l, p - 1);
    __quickSort(arr, p + 1, r);
  }
  function swap(arr, l, r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
  }
}

function quickSort2(arr) {
  __quickSort(arr, 0, arr.length - 1);
  function partition(arr, l, r) {
    let t = Math.floor(Math.random() * (r - l + 1)) + l;
    [arr[t], arr[l]] = [arr[l], arr[t]];

    let v = arr[l];
    let i = l + 1,
      j = r;
    while (true) {
      while (i <= r && arr[i] < v) i++;
      while (j >= l + 1 && arr[j] > v) j--;
      if (i > j) break;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
    [arr[l], arr[j]] = [arr[j], arr[l]];
    return j;
  }

  function __quickSort(arr, l, r) {
    if (l >= r) return;
    let p = partition(arr, l, r);
    __quickSort(arr, l, p - 1);
    __quickSort(arr, p + 1, r);
  }
}
function swap(arr, l, r) {
  [arr[l], arr[r]] = [arr[r], arr[l]];
}
function quickSort3warys(arr) {
  __quickSort(arr, 0, arr.length - 1);
  function __quickSort(arr, l, r) {
    if (l >= r) return;
    let t = Math.floor(Math.random() * (r - l + 1)) + l;
    swap(arr, t, l)
    let v = arr[l];
    let lt = l,
      gt = r + 1;
    let i = l + 1;
    while (i < gt) {
      if (arr[i] < v) {
        swap(arr, i, lt + 1);
        lt++;
        i++;
      } else if (arr[i] > v) {
        swap(arr, i, gt - 1);
        gt--;
      } else {
        i++;
      }
    }
    swap(arr, l, lt);
    __quickSort(arr, l, lt - 1);
    __quickSort(arr, gt, r);
  }
}
exports.quickSort = quickSort;
exports.quickSort2 = quickSort2;
exports.quickSort3warys = quickSort3warys;
