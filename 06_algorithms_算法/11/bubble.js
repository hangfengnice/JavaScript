var bubbleSort = function (a) {
  let len = a.length, flag;
  if (len <= 1) return 
  for(let i = 0; i < len; i ++) {
    flag = true
    for(let j = 0; j < n -i - 1; j ++) {
      if (a[j] > a[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        flag = false
      }
    }
    if (flag) break
  }
}