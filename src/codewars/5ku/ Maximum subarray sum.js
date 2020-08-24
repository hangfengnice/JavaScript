function maxSequence(arr) {
  var max = 0
  for(let i = 0;i < arr.length; i ++) {
    for(let sum = 0, j = i; j < arr.length; j ++ ) {
      sum += arr[j]
      max = Math.max(sum, max)
    }
  }
  return max
}

let ret = maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
console.log(ret);
