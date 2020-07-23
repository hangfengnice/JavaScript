const first = xs => xs[0]
const rest = xs => xs.slice(1)

var reduce = function (f, acc, xs) {
  if (xs.length == 0) return acc
  return reduce(f, f(acc, first(xs)), rest(xs))
}

var map = function (f, xs) {
  return reduce((acc, x) => acc.concat(f(x)), [], xs)
}

var filter = function (f, xs) {
  return reduce((acc, x) => f(x) ? acc.concat(x) : acc, [], xs)
}