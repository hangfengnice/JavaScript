const {curry, compose} = require('ramda')

const add = curry((x, y) => x + y)
const concat = curry((y, x ) => x + y)

const toUpper = str => str.toUpperCase()
const exclaim = str => str + '!'
const first = xs => xs[0]

const log = curry((tag, x) => (console.log(tag, x), x))

const loudFirst = compose(toUpper, first)
const shout = compose(concat('!'), log('here: '), loudFirst)

console.log(shout('tears'));
