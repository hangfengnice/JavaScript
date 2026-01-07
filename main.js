function isDivisible(...arr) {
  //Write your code here
  console.log(arr, 'arr')

  let first = arr[0]
  let other = arr.slice(1)

  if (other.some((key) => first % key)) {
    return false
  }
  return true
}

let s = isDivisible(6, 2, 3)
console.log(s, 's')
