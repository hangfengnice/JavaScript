// Format a string of names like 'Bart, Lisa & Maggie'.
function list(names) {
  names = names.map(item => item.name)
  if (names.length == 0) return ''
  else if (names.length == 1) return names[0]
  else if (names.length == 2) return names.join(' & ')
  else if (names.length >= 3) {
    let ret = names.slice(0, -1).join(', ')
    return ret + ' & ' + names.pop()
  }
}

var list = function (names) {
  var xs = names.map(p => p.name)
  let x = xs.pop()
  return xs.length ? xs.join(', ') + ' & ' + x : x || ''
}

let ret = list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
console.log(ret);
