function colorPad (str) {
  let reg = /[^#a-f0-9]/gi
  if (reg.test(str)) return

  if (str.length == 1 && !/#/.test(str)) {
    return "#" + str.repeat(6)
  }
  if (str.length == 2) {
    return "#" + str.substr(1).repeat(6)
  }
  // console.log('hello');
  return '#000000'
}
colorPad('#')


