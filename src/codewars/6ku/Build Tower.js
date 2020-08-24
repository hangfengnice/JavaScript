// Build Tower
function towerBuilder(nFloor) {
  let ret = []
  for(let i = 0; i < nFloor; i ++) {
    let ret1 = ' '.repeat(i) + '*'.repeat((nFloor - i) * 2 - 1) + ' '.repeat(i)
    ret.unshift(ret1)
  }
  return ret
}

var towerBuilder = function (n) {
  return Array.from({length: n}, (v, k) => {
    let spaces = ' '.repeat(n - k - 1)
    return spaces + '*'.repeat(k + k + 1) + spaces
  })
}

let ret = towerBuilder(3)
console.log(ret);
