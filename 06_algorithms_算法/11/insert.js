var insertionSort = function (a) {
  let len = a.length
  if (len <= 1) return 

  for(let i = 1; i < len; i ++) {
    let value = a[i], j = i - 1
    for( ; j >= 0; j --) {
      if (a[j] > value) {
        a[j + 1] = a[j]
      } else {
        break
      }
    }
    a[j + 1] = value
  }
}