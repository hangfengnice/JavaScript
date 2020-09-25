const { ajax } = require("jquery");

function narcissistic(value) {
  let str = String(value)
  if (str.length == 1) return true
  return (
    str
      .split("")
      .reduce((acc, cur) => acc + Math.pow(cur, str.length), 0) == value
  );
}

function high(x) {
  let as = x.split(' ').map(s => [...s].reduce((acc, cur) => acc + cur.charCodeAt() - 96, 0))

  return x.split(' ')[as.indexOf(Math.max(...as))]
}


// let ret = high('taxi zzz')
// console.log(ret)

function isPangram(string) {
  for(let i = 0; i < 26; i ++) {
    let reg = new RegExp(String.fromCodePoint(i + 97))
    if (!reg.test(string)) return false
  }
  return true
}
