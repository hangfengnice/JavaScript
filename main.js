var maximumSumOfHeights = function (maxHeights) {
  const n = maxHeights.length
  let res = 0
  for (let i = 0; i < n; i++) {
    let pre = maxHeights[i],
      sum = maxHeights[i]

    console.log(pre, sum, 'pre sum')

    for (let j = i - 1; j >= 0; j--) {
      per = Math.min(pre, maxHeights[j])
      sum += pre
    }

    let suf = maxHeights[i]

    for (let j = i + 1; j < n; j++) {
      suf = Math.min(suf, maxHeights[j])

      sum += suf
    }

    res = Math.max(sum, res)
  }

  return res
}

console.log(maximumSumOfHeights([5, 3, 4, 1, 1]))
