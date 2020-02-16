function createIndexFinder(dir) {
  return function(array, predicate, context) {
    var length = array.length;
    var index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate.call(context, array[index], index, array)) return index;
    }
    return -1;
  };
}

var findIndex = createIndexFinder(1);
var findLastIndex = createIndexFinder(-1);

console.log(
  findIndex([1, 3, 4], function(item) {
    return item > 2;
  })
);

function sortedIndex(array, obj) {
  var low = 0,
    high = array.length;
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (array[mid] < obj) low = mid + 1;
    else high = mid;
  }
  return high;
}
console.log(sortedIndex([10, 20, 30, 40, 50], 35));

function cb(func, context) {
  if (context === void 0) return func;
  return function() {
    return func.apply(context, arguments);
  };
}

function myIndex(array, obj, iterate, context) {
  iterate = cb(iterate, context);
  var low = 0,
    high = array.length;
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iterate(array[mid]) < iterate(obj)) low = mid + 1;
    else high = mid;
  }
  return high;
}
var stooges = [
  { name: "stooge1", age: 10 },
  { name: "stooge2", age: 30 }
];

var result = myIndex(stooges, { name: "stooge3", age: 20 }, function(stooge) {
  return stooge.age;
});

console.log(result);

// indexof

function createIndexOfFinder(dir) {
  return function (array, item) {
    var length = array.length
    var index = dir > 0 ? 0 : length - 1
    for (; index >= 0 && index < length;  index += dir) {
      if (array[index] === item) return index
    }
    return -1
  }
}
var indexOf = createIndexOfFinder(1)
var lastIndexOf = createIndexOfFinder(-1)

console.log("test indexOf", indexOf([1, 3, 4, 4], 3));

// indexOf 带参数

function createIndexOfFinderUp (dir) {
  return function(array, item, idx) {
    var length = array.length
    var i = 0
    if (typeof idx === 'number') {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(length + idx, 0)
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1
      }
    }
    for (idx = dir > 0 ? i : length -1; idx >=0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx
    }
    return -1
  }
}
