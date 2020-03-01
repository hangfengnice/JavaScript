// sum of two lowest positive integers
function sumTeoSamllestNumbers(numbers) {
  var [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

// shuffle it
function shuffleIt(arr, ...args) {
  for([a, b] of args) [arr[a], arr[b]] = [arr[b], arr[a]]
  return arr
}
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 3]));

// sum of positive
function positiveSum(arr) {
  return arr.reduce((a, b) => a + b > 0 ? b : 0, 0)
}

// return negative
function makeNegative(number) {
  return -Math.abs(number)
}

// remove first and last character
function removeChar(str) {
  return str.slice(1, -1)
}

// remove string spaces
function noSpace(x) {
  return x.split(' ').join('')
}

// grasshopper summation
function summation(num) {
  return num * (num + 1) / 2
}

// basic mathematical operations
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2)
}

// reversed sequence
const reverseSeq = length => Array.from({length}, () => length --)

// rock paper scissors
const rps = (p1, p2) => {
  if (p1 == p2) return 'Draw!'
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2} won!`
}

// total amount of points
const points = g => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)


// dna to rna conversion
function DNAtoRNA(dna) {
  return dna.split('T').join('U')
}