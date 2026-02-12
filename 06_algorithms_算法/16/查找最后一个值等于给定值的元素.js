var search = function (a, value) {
  let low = 0,
    high = a.length - 1

  while (low <= high) {
    mid = (low + high) >> 1;
    console.log("zheli");
    if (a[mid] > value) {
      high = mid - 1;
    } else if (a[mid] < value) {
      low = mid + 1;
    } else {
      if (mid == a.length - 1 || a[mid + 1] != value) return mid;
      else low = mid + 1;
    }
  }
  return -1;
};

let arr = [1, 2, 3, 4, 5, 6, 8, 8, 8, 8, 9];

let res = search(arr, 8)
console.log(res);
