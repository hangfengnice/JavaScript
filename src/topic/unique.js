var array = [1, 1, '1', '1']
var array1 = [1, 2, 3, 2, 1]
var array3 = ['A',1, 1, 'a',  2, 2]

function unique(array) {
  // console.log(array);
  var res = []
  for (var i = 0; i < array.length; i ++) {
    for (var j = 0; j < res.length; j ++) {
      if (array[i] === res[j]) break
    }
    if (j == res.length) {
      res.push(array[i])
    }
  }
  return res
}


function unique(array) {
  var res = []
  for (var i = 0; i < array.length; i ++) {
    var current = array[i]
    if (res.indexOf(current) == -1) {
      res.push(current)
    }
  }
  return res
}

function unique(array) {
  var res = []
  var sortedArray = array.concat().sort()
  var seen
  for (var i = 0; i < sortedArray.length; i ++) {
    if (!i || seen !== sortedArray[i]) res.push(sortedArray[i])
    seen = sortedArray[i]
  }
  return res
}

function unique(array, isSorted) {
  var res = [], seen
  for (var i = 0; i < array.length; i++) {
    var value = array[i]
    if (isSorted) {
      if (!i || seen !== value) res.push(value)
      seen = value
    } else if (res.indexOf(value) == -1) res.push(value)
  }
  return res
}
function unique(array, isSorted, iteratee) {
  var res = [], seen = []
  for (var i = 0; i < array.length; i ++) {
    var value = array[i]
    var computed = iteratee ? iteratee(value, i, array) : value
    if (isSorted) {
      if (!i || seen !== computed) {
        res.push(value)
      }
      seen = computed
    } else if (iteratee) {
      if (seen.indexOf(computed) === -1) {
        seen.push(computed)
        res.push(value)
      }
    } else if (res.indexOf(value) === -1) {
      res.push(value)
    }
  }
  return res
}

function unique(array) {
  return array.filter(function (item, index, array) {
    return array.indexOf(item) === index
  })
}
function unique(array) {
  return array.concat().sort().filter(function (item, index, array) {
    return !index || item !== array[index - 1]
  })
}
function unique(array) {
  var obj = {}
  return array.filter(function (item, index, array) {
    return obj.hasOwnProperty(item) ? false : (obj[item] = true)
  })
}
function unique(array) {
  var obj = {}
  return array.filter(function (item, index, array) {
    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
  })
}
function unique(array) {
  var obj = {}
  return array.filter(function(item, index, array) {
    // console.log(typeof item + JSON.stringify(item));
    return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
  })
}
function unique(array) {
  return Array.from(new Set(array))
}
function unique(array) {
  return [...new Set(array)]
}
function unique(array) {
  const seen = new Map()
  return array.filter(a => !seen.has(a) && seen.set(a, 1))
}
// console.log(unique(array, true));
// console.log(unique(array1, false));
// console.log(unique(array3, false, function (item) {
//   return typeof item == 'string' ? item.toLowerCase() : item
// }));
