function quick(arr, l, r) {
  if (l > r) return 
  let p = partition(arr, l, r)

  quick(arr, l , p - 1)
  quick(arr, p + 1, r)
}

function partition(arr, l, r) {
  let v = arr[l]
  let j = l
  for(let i = l + 1; i <= r; i ++) {
    if (arr[i] < v) {
      let temp = arr[i]
      arr[i] = arr[j + 1]
      arr[j + 1] = temp
      j ++
    }
  }
  let temp = arr[j]
  arr[j] = arr[l]
  arr[l] = temp
  return j
}
 

let arr = [1 ,5, 3, 8, 4]

quick(arr, 0, arr.length - 1)

console.log(arr)