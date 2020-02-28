function longestConsec(strarr, k) {
  var longest = ''
  for (var i = 0; k > 0 && i <= strarr.length - k; i ++) {
    var tempArray = strarr.slice(i, i + k)
    var tempStr = tempArray.join('')
    if (tempStr.length > longest.length) {
      longest = tempStr
    }
  }
  return longest
}

// mine
// function longestConsec(strarr, k) {
//   var n = strarr.length
//   if (n == 0 || k > n || k <= 0) return ''
//   var ret = ''
//   for (var i = 0; i < n - k ; i ++) {
//     var arr = []
//     for (var j = i; j < i + k; j ++) {
//       arr.push(strarr[j])
//     }
//     var temp = arr.join('')
//     if (!ret) {
//       ret = arr.join('')
//     } else if (temp.length > ret.length) {
//       ret = temp
//     }
//   }
//   return ret
// }
