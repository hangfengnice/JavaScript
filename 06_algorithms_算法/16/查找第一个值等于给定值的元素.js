var bsearch = function (a, n, value) {
  let low = 0, high = n - 1
  while(low <= high) {
    let mid = low + ((high - low) >> 1)
    if(a[mid] > value) {
      high = mid - 1
    } else if (a[mid] < value) {
      low = mid + 1
    } else {
      if (mid == 0 || (a[mid - 1] != value)) return mid
      else {high = mid - 1}
    }
  }
}