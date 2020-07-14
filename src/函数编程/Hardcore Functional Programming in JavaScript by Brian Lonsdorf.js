const _ = require('ramda')
const curry = _.curry

const add = (x, y) => x + y;

// const curry = f => x => y => f(x, y)

const uncurry = f => (x, y) => f(x)(y)

const curryiedAdd = curry(add)

const modulo = curry((x, y) => y % x)

const isOdd = modulo(2)

const filter = curry((f, xs) => xs.filter(f))

const replace = curry((regex, replacement, str) => str.replace(regex, replacement))

const replaceVowels = replace(/[aeiou]/ig, '!')

const result = replaceVowels('Hey I have words!')
