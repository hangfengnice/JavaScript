let arr = [-1, 0, 1, 2, -1, -4].sort((a, b) => a - b)

const validePalindRome = (str) => {
  let i = 0; j = str.length - 1
  while(i < j && str[i] == str[j]) {
    i ++
    j --
  }
  if (palindrome(i + 1, j)) {
    return true
  }
  if (palindrome(i, j - 1)) {
    return true
  }
  function palindrome(start, end) {
    while(start < end) {
      if (str[start] != str[end]) {
        return false
      }
      start ++
      end --
    }
    return true
  }
  return false
}

console.log(validePalindRome('hh'));

const firt = xs => xs[0]
const rest = xs => xs.slice(1)

const reduce = function (reduceFn, accumulator, iterable) {
  for (let i of iterable) {
    accumulator = reduceFn(accumulator, i)
  }
  return accumulator
}

const sum = xs => reduce((acc, x) => acc + x, 0, xs)
const reverse = xs => reduce((acc, x) => [x].concat(acc), [], xs)
const map = (f, xs) => reduce((acc, x) => acc.concat(f(x)), [], xs)
const filter = (f, xs) => reduce((acc, x) => f(x) ? acc.concat(x) : acc, [], xs)

console.log(filter(x => x == 2, [1, 2 ,3 ,3 ,2]));


