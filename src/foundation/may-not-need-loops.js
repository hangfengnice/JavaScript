const first = (xs) => xs[0];
const rest = (xs) => xs.slice(1);

const reduce = function (reduceFn, accumulator, iterable) {
  for (let i of iterable) {
    accumulator = reduceFn(accumulator, i)
  }
  return accumulator
}

const all = xs => reduce((acc, x) => acc && x, true, xs)

let ret = all([1, 2 ,3 ,4])

const para = (f, acc, xs) =>
  xs.length === 0
    ? acc
    : para(f, f(acc, first(xs), xs), rest(xs));
