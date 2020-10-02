var numJewelsInStones = function (J, S) {
  let sobj = {}, num = 0
  S.split('').forEach(item => {
    sobj[item] ? sobj[item] ++ : (sobj[item] = 1)
  })
  J.split('').forEach(item => sobj[item] ? (num += sobj[item]) : '')
  return num
}
