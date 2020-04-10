var arr = [1, 2, 3, 4]

function findIndex(array, predicate, context) {
  for (var i = 0; i < array.length; i ++) {
    if (predicate.call(context, array[i], i, array)) return i
  }
  return -1
}

function findLastIndex(array, predicate, context) {
  var length = array.length
  for (var i = length - 1; i >= 0; i --) {
    if (predicate.call(context, array[i], i, array)) return i
  }
  return -1
}

function createIndexFinder(dir) {
  return function (array, predicate, context) {
    var length = array.length
    var index = dir > 0 ? 0 : length - 1

    for (; index >= 0 && index < length; index += dir) {
      if (predicate.call(context, array[index], index, array)) return index
    }
    return -1
  }
}

var findIndex = createIndexFinder(1)
var findLastIndex = createIndexFinder(-1)

// console.log(findIndex(arr, function (item, i, array) {
//   if (item == 3) return true
// }));

var arr = [10, 20, 30, 40, 50]

function sortedIndex(array, obj) {
  var low = 0, high = array.length
  while(low < high) {
    var mid = Math.floor((low + high) / 2)
    if (array[mid] < obj) low = mid + 1
    else high = mid
  }
  return high
}

function cb(func, context) {
  if (context == void 0) return func
  return function () {
    return func.apply(context, arguments)
  }
}

function sortedIndex(array, obj, iteratee, context) {
  iteratee = cb(iteratee, context)

  var low = 0, high = array.length

  while(low < high) {
    var mid = Math.floor((low + high) / 2)
    if (iteratee(array[mid] < iteratee(obj))) low = mid + 1
    else high = mid
  }
  return high
}

function createIndexOfFinder(dir) {
  return function (array, item) {
    var length = array.length
    var index = dir > 0 ? 0 : length - 1
    for (; index >= 0 && index < length; index += dir) {
      if (array[index] === item) return index
    }
    return -1
  }
}

function createIndexOfFinder(dir, predicate, sortedIndex) {
  return function (array, item, idx) {
    var length = array.length
    var i = 0
    if (typeof idx === 'number') {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(length + idx, 0)
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1
      }
    }else if (sortedIndex && idx && length) {
      idx = sortedIndex(array, item)
      return array[idx] == item ? idx : -1
    }
    if (item !== item) {
      idx = predicate(array.splice(i, length), isNaN)
      return idx >= 0 ? idx + i : -1
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if(array[idx] == item) return idx
    }
    return -1
  }
}
var indexOf = createIndexOfFinder(1, findIndex)
var lastIndexOf = createIndexOfFinder(-1, findLastIndex)

// console.log(indexOf([1, NaN], NaN));

// console.log(indexOf(arr, 1));





