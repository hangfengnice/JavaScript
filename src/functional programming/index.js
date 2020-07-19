const {
  gt,
  gte,
  equals,
  eqBy,
  add,
  subtract,
  multiply,
  divide,
  either,
  allPass,
  split,
  test,
  match,
  compose,
  pipe,
  converge,
  concat,
  toLower,
  toUpper,
  curry,
  partial,
  useWith,
  dec,
  inc,
  memoizeWith,
  identity,
  product,
  range,
  complement,
  isNil,
  binary,
  assoc,
  tap,
  zipWith,
  apply,
  applySpec,
  remove,
  intersperse,
  reject,
  takeWhile,
  dropWhile,
  without,
  splitEvery,
  splitWhen,
  map,
  reduceWhile,
  sortWith,
  descend,
  prop,
  ascend,
  adjust,
  ap,
  zipObj,
  xprod,
  differenceWith,
  pluck
} = require('ramda')

// let arr = Array.from({length: 9}, (_, i) => i + 1)

// let ret = pluck( 'val', {a: {val: 1}});

// console.log(ret);

var cmp = (x, y) => x.a === y.a
var l1 = [{a: 1}, {a: 2}, {a: 3}];
var l2 = [{a: 3}, {a: 2}];

const alice = {
  name: 'alice',
  age: 40
};
const bob = {
  name: 'bob',
  age: 30
};
const clara = {
  name: 'clara',
  age: 40
};
const people = [clara, bob, alice];

const isOdd = x => x % 2
const ls4 = x => x < 4

var addFourNumbers = (a, b, c, d) => a + b + c + d
let addF = curry(addFourNumbers)

var sumOfArr = arr => arr.reduce((acc, cur) => acc + cur, 0)
var lengthOfArr = arr => arr.length

var negative = x => -1 * x
var increaseOne = x => x + 1

var gt10 = x => x > 10
var ls30 = x => x < 30
var even = x => x % 2 == 0
