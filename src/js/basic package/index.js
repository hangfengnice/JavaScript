// function positiveSum(arr) {
//   var sum = 0
//   arr.map(i => {
//     i > 0 ? sum += i : i
//   })
//   return sum
// }

// function findSmallestInt(arr) {
//   return arr.reduce((a, b) => a > b ? b : a)
// }

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case '+':
//       return value1 + value2
//       case '-':
//         return value1 - value2
//         case '*':
//           return value1 * value2
//           case '/':
//             return value1 / value2
//   }
// }


// function findNeedle(haystack) {
//   var index = haystack.indexOf('needle')
//   return 'found the needle at position ' + index + ''
// }
// function numberToPower(number, power) {
//   return Math.pow(number, power)
// }

// console.log(numberToPower(4, 2));
// function sc(floor) {
//   if (floor < 2) {
//     return ''
//   } else if (floor < 7) {
//     return 'Aa~ '.repeat(floor - 2) + 'Pa! Aa!'
//   } else if (floor > 6) {
//     return 'Aa~ '.repeat(floor - 1) + 'Pa!'
//   }
// }

// function closeCompare(a, b, margin) {
//   if (margin > 0) {
//     if (margin > Math.abs(a - b)) {
//       return 1
//     } else if (margin < Math.abs(a - b)) {
//       return -1
//     } else if (margin == Math.abs(a - b)) {
//       return 0
//     }
//   }

//   if (a - b > 0) {
//     return 1
//   } else if (a - b == 0) {
//     return 0
//   } else if (a -b < 0) {
//     return -1
//   }


// }
// console.log(Math.sign(0));

// function sumArray(array) {
//   if (!array || array.length <= 1) return 0
//   var max = Math.max(...array)
//   var min = Math.min(...array)
//   var sum = array.reduce((a, b) => a + b)
//   return sum - max - min
// }

// function abbrevName(name) {
//   return name.repalce(/\b(\w).*\b/g, (match, $1) => $1.toUpperCase()).repalce(" ", '.')
// }



// console.log(Array.from({length: 3}), (a, i, arr) => {
//   console.log(a, i , arr);
// });

// function monkeyCount (n) {
//   return Array.from([1, 3], (a, i) => {
//     console.log(a, i );
//   })
// }

// monkeyCount(2)

// var arr = [1, 2, 3]

// arr.forEach(i => i + 1)
// console.log(arr);

// function test([x, _, y]) {
//   console.log(x,y);
// }
// test('helo')

// console.log(...arr.keys());


// function rentalCarCost(d) {
//   if (d < 3) {
//     return d * 40
//   } else if (d >= 3 && d < 7) {
//     return d * 20
//   } else if (d > 7) {
//     return d * 20 - 50
//   }
// }


console.log(2^2);
