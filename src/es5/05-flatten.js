var arr = [1, 2, [2, 4, [5]]]

function flatten(arr) {
  var result = []
  for (var i = 0; i < arr.length; i ++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

console.log(flatten(arr));
