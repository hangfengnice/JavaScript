const moment = require('moment')

// parse

// string + data + format
var now = moment('2019-12-12')

// native
let datePattern = /^(\d{2})-(\d{2})-(\d{4})$/
let [, month, day, year] = datePattern.exec('12-12-2019')
new Date(`${month}, ${day}, ${year}`)

// moment
let secondsM = moment().seconds()
let hoursM = moment().hours()

console.log(new Date().getHours());
console.log(new Date(new Date().setHours(12)));
console.log(secondsM, hoursM);


// let ret = now.format()
// console.log(ret);
