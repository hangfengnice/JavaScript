// vowel count
function getCount(str) {
  return str.replace(/[^aoeiu]/g, '').length
}

// isograms
function isogram(str) {
  return !/(\w).*\1/i.test(str)
}
function isogramSet(str) {
  return new Set(str.toLowerCase()).size == str.length
}

// credit card mask
function maskify(cc) {
  return cc.replace(/.(?=....)/, '#')
}
