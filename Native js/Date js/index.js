// UTC Coordinated Universal Time

console.log(new Date());
console.log(new Date(Date.parse("May, 25, 2019")));

let date1 = new Date(2007, 0, 1)
let date2 = new Date(2007, 1, 1)
console.log(date1 < date2); // true
console.log(date1, date2); 
