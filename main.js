function isEven(int) {
  if (int === 0) {
    return true
  } else if (int === 1) {
    return false
  }

  if (int > 0) {
    return isEven(int -2)
  } else {
    return isEven(int + 2)
  }
}

function countBs (str, char = 'B') {
  let count = 0
  for(let i = 0; i < str.length; i ++) {
    if (str[i] === char) {
      count ++
    }
  }
  return count
}