function flatten(input, shallow, strict, output = []) {
  var idx = output.length

  for(let i = 0; i < input.length; i++ ) {
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

var arr = [1, 2, [3, 4]];

let res = flatten(arr, true, true)

console.log(res);
