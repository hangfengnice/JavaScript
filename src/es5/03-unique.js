// var array = [1, 1, '1', '1']
function unique(arr) {
  var ret = []
  for (var i = 0; i < arr.length; i ++) {
    for (var j = 0; j < ret.length; j ++) {
      if (ret[j] === arr[i]) {
        break
      }
    }
    if (j == ret.length) {
      ret.push(arr[i])
    }
  }
  return ret
}
function unique(arr) {
  var ret = []
  for (var i = 0; i < arr.length; i ++) {
    if (ret.indexOf(arr[i])  === -1 ) {
      ret.push(arr[i])
    }
  }
  return ret
}

function unique(arr) {
  var ret = []
  var sortedArr = arr.concat().sort()
  for (var i = 0; i < sortedArr.length; i ++) {
    if (!i || arr[i] !== arr[i - 1]) {
      ret.push(arr[i])
    }
  }
  return ret
}
var arr1 = [1, 2, '3', 2, 1]
var arr2 = [1 , 2, 2, 3, 3, 4, 4]
var arr3 = [1 , 1 ,'a', 'A', 2, 2 ]
function unique(arr, isSorted) {
  var ret = []
  var seen = []
  for (var i = 0; i < arr.length; i ++) {
    if (isSorted) {
      if (!i || arr[i] !== arr[i - 1]) {
        ret.push(arr[i])
      }
    } else {
      if (ret.indexOf(arr[i]) === -1) {
        ret.push(arr[i])
      }
    }
  }
  return ret
}
function unique(arr, isSorted, iteratee) {
  var ret = []
  for (var i = 0; i < arr.length; i ++) {
    var value = arr[i]
    var computed = iteratee ? iteratee(arr[i], i, arr) : value
    var computed1 = iteratee ? iteratee(arr[i - 1 ], i- 1, arr) : value
    if (isSorted) {
      if (!i || computed !== computed1) {
        ret.push(arr[i])
      }
    } else if (iteratee){
      if (!i || computed !== computed1) {
        ret.push(arr[i])
      }
    } else {
      if (ret.indexOf(arr[i]) == -1) {
        ret.push(arr[i])
      }
    }
  }
  return ret
}
let ret3 = unique(arr3, false, (val) => {
  return typeof val == 'string' ? val.toLowerCase() : val
})

function unique(arr) {
  return arr.filter((item, index, array) => {
    return array.indexOf(item) === index
  })
}

function isEmpty(obj) {
  var name
  for (name in obj) {
    return false
  }
  return true
}

console.log(isEmpty(1));


// console.log('1' in 1);
var arr = [function () {console.log(a)}, {b: function () {console.log('b')}}]

let arr11 = JSON.parse(JSON.stringify(arr))
console.log(arr11);
