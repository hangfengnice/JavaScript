const repeat = (str = '', times = 1) => {
  let result = ''
  if (!str || times < 1) {
    return result
  }
  
  debugger
  do {
    if (times % 2) {
      result += str
    }
    times = Math.floor(times / 2)

    if (times) {
      str += str
    }
  } while(times)

  return result
}

console.log(repeat('a', 9));