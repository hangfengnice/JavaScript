var select = function (a) {
  let len = a.length
  if (len <= 1) return 
  for(let i = 0; i < len; i ++) {
    // let value = a[i]
    for(let j = i + 1; j < len; j ++) {
      if (a[j] < a[i]) {
        let temp = a[j]
        a[j] = a[i]
        a[i] = temp
      }
    }
  }
}

let arr = [1, 3, 6, 4,5]

select(arr)

console.log(arr)