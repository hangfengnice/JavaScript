// function findIndex(array, predicate, context) {
//   for(var i = 0; i < array.length; i ++) {
//     if (predicate.call(context, array[i], i, array)) return i
//   }
//   return -1
// }

// function findLastIndex(array, predicate, context) {
//   for(let i = array.length - 1; i >= 0; i --) {
//     if (predicate.call(context, array[i], i, array)) return i
//   }
//   return -1
// }

function createIndexFinder(dir) {
  return function (array, predicate, context) {
    let length = array.length
    var index = dir > 0 ? 0 : length - 1

    for(; index < length && index >= 0; index += dir) {
      if (predicate.call(context, array[index], index, array)) return index
    }
    return -1
  }
}

let arr = [1, 3, 5,4, 4, 4, 5]

var findIndex = createIndexFinder(1)
var findLastIndex = createIndexFinder(-1)

// let res1 = findIndex(arr, function (item, i, array) {
//   return item == 5
// })

// let res2 = findLastIndex(arr, function (item, i, array) {
//   return item == 5
// })

// console.log(res1, res2);

// [10, 20, 30, 40, 50], 35
// function sortedIndex(array, obj) {
//   var low = 0, high = array.length
//   // 0, 5 // 3, 5 // 3, 4
//   while(low < high) {
//     var mid = Math.floor((low + high) / 2)  // 2 4
//     if (array[mid] < obj) low = mid + 1 // 3
//     else high = mid
//   }
//   return high
// }

function cb(func, context) {
  if (context === void 0) return func
  return function () {
    return func.apply(context, arguments)
  }
}

function sortedIndex(array, obj, iteratee, context) {
  iteratee = cb(iteratee, context)

  var low = 0, high = array.length
  while(low < high) {
    var mid = Math.floor((low + high) / 2)

    if (iteratee(array[mid]) < iteratee(obj)) low = mid + 1
    else high = mid
  }
  return high
}

var stooges = [{name: 'stooge1', age: 10}, {name: 'stooge2', age: 30}];

// var result = sortedIndex(stooges, {name: 'stooge3', age: 20}, function(stooge){
//     return stooge.age
// });

function createIndexOfFinder(dir) {
  return function (array, item) {
    let length = array.length
    let index = dir > 0 ? 0 : length - 1
    for(; index >= 0 && index < length; index += dir) {
      if (array[index] === item) return index
    }
    return -1
  }
}

let indexof = createIndexOfFinder(1)

let result = indexof([1, 2, 3], 3)


console.log(result)

