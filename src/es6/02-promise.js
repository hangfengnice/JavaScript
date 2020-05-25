// function red() {
//   console.log("red");
// }
// function green() {
//   console.log("green");
// }
// function yellow() {
//   console.log("yellow");
// }

// var light = function (timmer, cb) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       cb();
//       resolve();
//     }, timmer);
//   });
// };

// function setColor(color, time) {
//   return function (callback) {
//     document.getElementById("lamp").style.backgroundColor = color;
//     setTimeout(callback, time);
//   };
// }
// var queue = function (funcs) {
//   (function next() {
//     if (funcs.length > 0) {
//       var f = funcs.shift();
//       console.log(next);
//       f(next);
//     }
//   })();
// };

// +(function tick() {
//   queue([
//     setColor("red", 3000),
//     setColor("green", 2000),
//     setColor("gray", 1000),
//     tick,
//   ]);
// })();

// let str = '123456789'

// console.log(str.replace(/\B(?=(\d{3})+\b)/g, ','));

// const randomId = (len) => Math.random().toString(36).substr(3, len)

// let ret = randomId(10)
// console.log(ret);


// const RoundNum = (num, decimal) => Math.round(num * 10 ** decimal) / 10 ** decimal

// console.log(RoundNum(1.68, 1));
