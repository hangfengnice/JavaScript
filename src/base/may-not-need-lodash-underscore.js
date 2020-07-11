const _ = require("lodash");

// * links
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

// last
const last = (arr) => arr.slice(-1)[0];

// lastIndexOf
const lastIndexOf = (arr, value, from) => arr.lastIndexOf(value, from);

// reverse
const reverse = (arr) => arr.reverse();

// slice

// without
const without = (arr, ...rest) => arr.filter((item) => !rest.includes(item));

// initial
const initial = (arr) => arr.slice(0, -1);

// pull
const pull = (arr, ...values) => {
  let set = new Set(values);
  return arr.filter((x) => !set.has(x));
};

//  * collection

// each
const each = (collecton, iteratee) => {
  if (Array.isArray(collecton)) {
    collecton.forEach(iteratee);
  } else {
    Object.entries(collecton).forEach(iteratee);
  }
};

// every

// filter

// groupBy
const groupBy = (arr, iteratee) =>
  arr.reduce(
    (
      r,
      v,
      i,
      a,
      k = typeof iteratee == "function" ? iteratee(v) : v[iteratee]
    ) => ((r[k] || (r[k] = [])).push(v), r),
    {}
  );

// includes **(array || object || string)

// keyBy
const keyBy = (arr, key) =>
  (arr || []).reduce((r, x) => ({ ...r, [key ? x[key] : x]: x }), {});

// map ** (object || prop)

// minBy, maxBy
const minBy = (arr, iteratee) =>
  arr.reduce((acc, cur) => {
    if (typeof iteratee == "function") {
      return iteratee(acc) < iteratee(cur) ? acc : cur;
    }
    return acc[iteratee] < cur[iteratee] ? acc : cur;
  });

// pluck *remove*

// reduce reduceRight

// range
// const range = (start = 0, end, step = 1)

// sample
const sample = (arr) => {
  let length = arr == null ? 0 : arr.length;
  return length ? arr[Math.floor(Math.random() * length)] : undefined;
};

// size *(array || object || string)

// some

// sortBy

// uniq 去重

// bind (placeholder)

// debounce

// isEmpty
const isEmpty = (obj) =>
  [Object, Array].includes((obj || {}).constructor) &&
  !Object.entries(obj || {}).length;

// get
const get = (obj, path, defaultValue = undefined) => {
  const travel = (regexp) =>
    path
      .split(regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj
      );
  const result = travel(/[[,[\].]+?/g);
  return result === undefined || result === obj ? defaultValue : result;
};
