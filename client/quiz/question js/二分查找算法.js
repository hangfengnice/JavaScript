function binary_serach(arr, key) {
  let low = 0, high = arr.length - 1
  while(low <= high) {
    let mid = parseInt(low + (high - low) / 2)
    if (key === arr[mid]) {
      return mid
    } else if (key < arr[mid]) {
      high = mid - 1
    } else if (key > arr[mid]) {
      low = mid + 1
    } else {
      return -1
    }
  }
}

let arr = [1,2,3,4,5,6,7,8,6]

console.log(binary_serach(arr, 5))


for (var i = 0; i < 5; i ++) {
  setTimeout(function (i) {
    console.log(i)
  }, 1000, i)
}
