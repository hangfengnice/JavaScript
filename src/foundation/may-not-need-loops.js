const first = (xs) => xs[0];
const rest = (xs) => xs.slice(1);

var reduce = function (f, acc, xs) {
  if (xs.length == 0) return acc
  return reduce(f, f(acc, first(xs)), rest(xs))
}

var sum = function (xs) {
  return reduce((acc, x) => x + acc, 0, xs)
}

var reverse = function (xs) {
  return reduce((acc, x) => x.concat(acc), [], xs)
}

var map = function (f, xs) {
  return reduce((acc, x) => acc.concat(f(x)), [], xs)
}

var filter = function (f, xs) {
  return reduce((acc, x) => f(x) ? acc.concat(x) : acc, [], xs)
}

var para = function (f, acc, xs) {
  if (xs.length == 0) return acc
  return para(f, f(acc, first(xs), xs), rest(xs))
}

var unfold = function (f, seed) {
  function go(f, seed, acc) {
    var res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}

let ret = unfold(x => {
  if (x < 26) {
    return [String.fromCharCode(x + 65), x + 1]
  }
}, 0)

var range = function (i, count) {
  return unfold(x => {
    if (x <= count) {
      return [x, x + 1]
    }
  }, i)
}
var tree = function () {
  
}
console.log(range(1, 5));
