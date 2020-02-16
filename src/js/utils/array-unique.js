var array = [1, 1, "1", "1"];
function unique(array) {
  var res = [];
  for (var i = 0, len = array.length; i < len; i++) {
    for (var j = 0, len1 = res.length; j < len1; j++) {
      if (array[i] === res[j]) {
        break;
      }
    }
    if (j === len1) {
      res.push(array[i]);
    }
  }
  return res;
}
console.log(unique(array));

// indexOf
var array1 = [1, 2, "1", "1"];
function unique1(array) {
  var res = [];
  for (var i = 0, len = array.length; i < len; i++) {
    if (res.indexOf(array[i]) === -1) {
      res.push(array[i]);
    }
  }
  return res;
}
console.log(unique1(array1));

// 排序后去重
var array2 = [1, 1, "1", "1"];
function unique2(array) {
  var res = [];
  var sortArr = array.concat().sort();
  var seen;
  for (var i = 0, len = sortArr.length; i < len; i++) {
    if (!i || seen !== sortArr[i]) {
      res.push(sortArr[i]);
    }
    seen = sortArr[i];
  }
  return res;
}
console.log(unique2(array2));

// 结合使用
var array3 = [1, 2, "1", 2, 1, "1"];
var array4 = [1, 2, 3, 4, 4];

function unique3(array, isSorted) {
  var ret = [],
    seen;
  for (var i = 0, len = array.length; i < len; i++) {
    var value = array[i];
    if (isSorted) {
      if (!i || seen !== value) {
        ret.push(value);
        seen = value;
      }
    } else if (ret.indexOf(value) === -1) {
      ret.push(value);
    }
  }
  return ret;
}
console.log(unique3(array3), unique3(array4));
console.log(unique3(array4, true));

// better
var array5 = [1, 1, "a", "A", 2, 2];

function unique4(array, isSorted, iterate) {
  var res = [];
  var seen = [];
  for (var i = 0, len = array.length; i < len; i++) {
    var value = array[i];
    var computed = iterate ? iterate(value) : value;
    if (isSorted) {
      if (!i || seen != computed) {
        res.push(value);
        seen = computed;
      }
    } else if (iterate) {
      if (seen.indexOf(computed) === -1) {
        seen.push(computed);
        res.push(value);
      }
    } else if (res.indexOf(value) === -1) {
      res.push(value);
    }
  }
  return res;
}
console.log(
  unique4(array5, false, function(value) {
    return typeof value === "string" ? value.toLocaleLowerCase() : value;
  })
);
console.log(
  "action ",
  unique4([{ value: 1 }, { value: 1 }, { value: 2 }], true, function(item) {
    return item.value;
  })
);

// filter
var array6 = [1, 2, 3, "1", "1"];
function unique5(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}
console.log(unique5(array6));

// 排序去重
var array7 = [1, 3, 3, "4", "4"];
function unique6(array) {
  return array
    .sort()
    .filter((item, index) => !index || item !== array[index - 1]);
}
console.log(unique6(array7));

// Object 键值对
var array8 = [1, 2, 2, 2, "1", "1"];
var array9 = [{ value: 1 }, { value: 2 }];
function unique7(array) {
  var obj = {};
  return array.filter(item =>
    obj.hasOwnProperty(typeof item + JSON.stringify(item))
      ? false
      : (obj[typeof item + JSON.stringify(item)] = true)
  );
}
console.log(unique7(array8), unique7(array9), unique6(array9));

// es6
var unique = a => [...new Set(a)];

// map
function unique(arr) {
  const seen = new Map();
  return arr.filter(a => !seen.has(a) && seen.set(a, 1));
}
