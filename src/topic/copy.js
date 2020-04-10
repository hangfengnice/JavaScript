var shallowCopy = function (obj) {
  if (typeof obj != 'object') return
  var newObj = obj instanceof Array ? [] : {}
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}
var deepCopy = function (obj) {
  if (typeof obj !== 'object') return
  var newObj = obj instanceof Array ? [] : {}
  for (var key in obj) {
    newObj[key] = typeof obj[key] == 'object' ? deepCopy(obj[key]) : obj[key]
  }
  return newObj
}

var arr = ['old', 1, true, ['old1', 'old2'], {old: 1}]

// var new_arr = shallowCopy(arr)
// console.log(new_arr);
