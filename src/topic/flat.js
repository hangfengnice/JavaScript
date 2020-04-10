var arr = [1, [2, [3, 4]]]

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

function flatten(arr) {
  return arr.toString().split(',').map(function (item) {
    return +item
  })
}

function flatten(arr) {
  return arr.reduce(function (prev, next) {
    return prev.concat(Array.isArray(next) ? flatten(next) : next)
  }, [])
}

function flatten(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

function flatten(input, shallow, strict, output) {
  output = output || []
  var idx = output.length
  for (var i = 0; i < input.length; i ++) {
    var value = input[i]
    if (Array.isArray(value)) {
      if (shallow) {
        var j = 0, length = value.length
        while(j < length) output[idx ++] = value[j ++]
      } else {
        flatten(value, shallow, strict, output)
        idx = output.length
      }
    } else if (!strict) {
      output[idx ++] = value
    }
  }
  return output
}

// console.log(flatten(arr, true));
