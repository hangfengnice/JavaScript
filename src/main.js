


const longestPalindrome = function (s) {
  let len = s.length
  dp = Array(len).fill().map(() => [])
  let st = 0, end = 0
  for(let i = 0; i < len; i ++) {
    dp[i][i] = 1
  }
  for(let i = 0; i < len - 1; i ++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = 1
      st = i
      end = i + 1
    }
  }
  for(let n = 3; n <= len; n ++) {
    for(let i = 0; i <= len - n; i ++) {

    }
  }
}

let dp = Array(5).fill().map(() => [])
console.log(dp);
