// console.log('hello'.charAt(6));
// console.log('hello'.charCodeAt(-1));
// // console.log('hello'.charAt(6));
// // console.log('hello'.charAt(6));
// console.log('helo'.match('h'));

// console.log('helo'.slice(-4,));
// console.log('he|'.split(/\|/));

// console.log('he'.substr(-1));

// console.log(typeof /a/);
// NaN = 1
// console.log(+ 'a');


// console.log(NaN);

// var obj = {}
// obj['prototype'] += obj['prototype'] + 1
// console.log(obj['prototype']);
// console.log(false == null);
// console.log(null == null);
// console.log(Math.max(2, 3, 3));
// function openOrSenior(data) {
//   return data.map(item => {
//     return (item[0] > 55 || item[1] > 55) && Math.abs(item[0] - item[1]) > 7 ? 'Senior' : 'Open'
//   })
// }

// var numbers = function (busStops) {
//   return busStops.reduce((a, b) => a + b[0] - b[1], 0)
// }

// function divisors (integer) {

//   var ret = [];
//   for (var i = integer ; i > 1; i --) {
//     if (Number.isInteger(integer / i)) {
//       ret.push(integer / i)
//     }
//   }
//   return ret.length ? ret : integer + " is prime"
// }

function SeriesSum (n) {
  return Array.from({length: n}, (_, i) => 1 / (i + 1) / 3).reduce((a, b) => a + b)
}
