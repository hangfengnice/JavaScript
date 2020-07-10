// chunk
const chunk = (xs, size) => {
  return arr.reduce((arr, item, idx) => {
    return idx % size == 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

// compact
const compact = (xs) => xs.filter(Boolean);

// concat
const concat = (...args) => args.reduce((prev, next) => prev.concat(next), []);

// difference
const difference = (a, b) => a.filter((x) => !b.includes(x));

// drop
const drop = (arr, begin) => arr.slice(begin || 1);

// dropRight
const dropRight = (arr, last) => arr.slice(0, -(last || 1));

// fill
const fill = (arr, args, begin, end) => arr.fill(args, begin, end);

// find
const find = (obj, f) => obj.find(f);

// findIndex
const findIndex = (obj, f) => obj.findIndex(f);

// head (alias: first)
const head = (arr) => arr[0];

// flatten
const flatten = (arr) => arr.flat();

// flattenDeep
const falttenDeep = (arr) => arr.flat(Infinity);

// fromPairs
// ES 2019
const fromPairs = (arr) => Object.fromEntries(arr);
// reduce
const fromPairsReduce = (arr) =>
  arr.reduce((acc, cur) => {
    acc[cur[0]] = cur[1];
    return acc;
  }, {});

// tail
// const [head, ...tail] = [1, 2, 3, 4];

// indexOf
const indexOf = (arr, value, from) => arr.indexOf(value, from);

// intersection
const intersection = (...arr) =>
  arr.reduce((acc, cur) => acc.filter((x) => cur.includes(x)));

// takeRight
const takeRight = (arr, len) => {
  if (len == 0) return arr;
  return arr.slice(-len);
};

// isArray
const isArray = (arr) => Array.isArray(arr);

// isArrayBuffer
const isArrayBuffer = (params) => params instanceof ArrayBuffer;

// join
const join = (arr, separator) => arr.join(separator);
