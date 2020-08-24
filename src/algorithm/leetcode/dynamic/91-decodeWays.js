var numDecodings = function (s) {
  let len = s.length
  if (len == 0) return 0
  let dp = Array(len).fill(0)
  if (s[0] == '0') return 0
  dp[0] = 1
  for(let i = 1;i < len; i ++) {
    if (s[i] != '0') dp[i] = dp[i - 1]
    let num = 10 * s[i - 1] + +s[i]
    if (num >= 10 && num <= 26) {
      if (i == 1) {
        dp[i] ++
      } else dp[i] += dp[i - 2]
    }
  }
  return dp[len - 1]
}

let ret = numDecodings("10")
console.log(ret)
