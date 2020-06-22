const _ = require('lodash')

const arr = [1, 2, 3, 4, 5];
function identity(value) {
  return value;
}
function sum(array) {
  return array && array.length ? baseSum(array, identity) : 0;
}

function baseSum(array, iteratee) {
  var result,
    index = -1,
    length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : result + current;
    }
  }
  return result;
}
const result = _.sum(arr)
// console.log(result);

function mean(array) {
  return baseMean(array, identity);
}

function baseMean(array, iteratee) {
  var length = array == null ? 0 : array.length;
  return length ? (baseSum(array, iteratee) / length) : NAN;
}


function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, getIteratee(iteratee, 3));
}
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
function getIteratee() {
  var result = lodash.iteratee || iteratee;
  result = result === iteratee ? baseIteratee : result;
  return arguments.length ? result(arguments[0], arguments[1]) : result;
}


const arr1 = [ 1, 2, 3, 2, 2, 3, 1, 4, 4, 1, 2, 1, 1, 3, 4 ]

let obj = {}

arr1.forEach(item => {
  obj[item] ? obj[item] ++ : obj[item] = 1
})
let keys = Object.entries(obj)
console.log(keys)
let result1 = keys.sort((a, b) => a[1] - b[1]).pop()
console.log(result1);

