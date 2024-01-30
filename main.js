var maximumSumOfHeights = function (maxHeights) {
  const n = maxHeights.length
  const prefix = new Array(n).fill(0)
  const suffix = new Array(n).fill(0)

  const stack1 = []
  const stack2 = []

  for (let i = 0; i < n; i++) {
    while (
      stack1.length &&
      maxHeights[i] < maxHeights[stack1[stack1.length - 1]]
    ) {
      stack1.pop()
    }

    if (!stack1.length) {
      prefix[i] = (i + 1) * maxHeights[i]
    } else {
      let last = stack1[stack1.length - 1]

      perfix[i] = prefix[last] + (i - last) * maxHeights[i]
    }
    stack1.push(i)
  }

  let res = 0

  for (let i = n - 1; i >= 0; i--) {
    while (
      stack2.length &&
      maxHeights[i] < maxHeights[stack2[stack2.length - 1]]
    ) {
      stack2.pop()
    }

    if (!stack2.length) {
      suffix[i] = (n - i) * maxHeights[i]
    } else {
      let last = stack2[stack2.length - 1]

      suffix[i] = suffix[last] + (last - i) * maxHeights[i]
    }
    stack2.push(i)

    res = Math.max(res, prefix[i] + suffix[i] - maxHeights[i])
  }

  return res
}
