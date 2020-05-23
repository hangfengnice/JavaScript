// # 1010

var numPairsDivisibleBy60 = time => {
  let c = new Array(60).fill(0)
  debugger
  return time.reduce((count, cur) => {
      count += c[(60 - cur % 60) % 60]
      c[cur % 60] += 1
      return count
  }, 0)
}

// console.log(numPairsDivisibleBy60([60, 60, 60, 40 , 20]))


console.log((1 + 2) >> 1)

console.log('hello')
