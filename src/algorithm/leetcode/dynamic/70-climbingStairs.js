var climbStairs = function (n) {
  let arr = []
  arr[0] = 1
  arr[1] = 1
  for(let i = 2; i <= 2; i ++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}

//  优化
var climbStairs = function (n) {
  let p = 0, q= 0, r = 1
  for(let i = 1; i <=n; i ++) {
    p = q
    q = r
    r = p + q
  }
  return r
}
