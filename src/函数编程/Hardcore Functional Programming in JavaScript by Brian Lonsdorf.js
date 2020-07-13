const {curry} = require('ramda')

const replace = curry((regex, replacement, str) => str.replace(regex, replacement))

const replaceVowels = replace(/[aeiou]/ig, '!')
const result = replaceVowels('hey i have words')
console.log(result);
