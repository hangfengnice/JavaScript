// 1. window.localStorage 不太合适

// 2. 种子随机数 
// function rnd( seed ){
//   seed = ( seed * 9301 + 49297 ) % 233280; 
//   return seed / ( 233280.0 ) * 10e17;
// };

// 3. 字母转数字
// function letter2num (str) {
//   return str.replace(/\D/g, function (matchs) {
//     return matchs.charCodeAt()
//   })
// }

// 4. Math.cos() / Math.sin()

// 5.order  Math.random不是真随机

var arr = [{skin:1},{skin:2},{skin:3},{skin:4},{skin:5},{skin:6},{skin:7},{skin:8},{skin:9},{skin:10}]
function getRandomSkins(uid, skins) {
  skins = skins instanceof Array ? skins : []

  if (!uid) return skins;

  var charCode = String(uid).split('').reduce((total, cur) => {
    return total + Number.isNaN(cur) ? cur.charCodeAt() : cur
  }, '') 

  let seed = String(Math.sin(charCode)).split('.')[1].substr(0, skins.length)

  let result = skins.map(function (item, idx) {
    item._order = Number(seed[idx])
    return item
  })
  
  return result.sort(function (o, p) {
    return o._order - p._order
  }).map(function(item) {
    delete item._order
    return item
  })
}
console.log(getRandomSkins('001yy', arr));
console.log(getRandomSkins('001yy', arr));
console.log(getRandomSkins('001hf', arr));
