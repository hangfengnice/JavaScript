var lengthOfLongestSubstring = function (s) {
  let len = s.length
  if (!len) return 0
  let has = {}
  let max = 0
  let left = 0
  for(let right = 0; right < len; right ++) {
    let moveLeft = has[s[right]]
    if (moveLeft) {
      left = Math.max(left, moveLeft)
    }
    has[s[right]] = right + 1
    max = Math.max(max, right - left + 1)
  }
  return max
}

let res = lengthOfLongestSubstring('abcabcbb')

console.log(res);

