// function LazyMan(name) {
//   this.tasks = [];

//   var self = this;

//   var fn = (function (name) {
//     return function () {
//       console.log("Hi! this is " + name + "!");
//       self.next();
//     };
//   })(name);
//   this.tasks.push(fn);

//   setTimeout(() => {
//     this.next();
//   }, 0);
// }

// LazyMan.prototype.next = function () {
//   var fn = this.tasks.shift();
//   fn && fn();
// };

// LazyMan.prototype.eat = function (name) {
//   var fn = () => {
//     console.log("Eat " + name + "~");
//     this.next();
//   };
//   this.tasks.push(fn);
//   return this;
// };

// LazyMan.prototype.sleep = function (time) {
//   var fn = () => {
//     setTimeout(() => {
//       console.log("Wake up after " + time + "s!");
//       this.next();
//     }, time * 1000);
//   };
//   this.tasks.push(fn);
//   return this;
// };

// LazyMan.prototype.sleepFirst = function (time) {
//   var fn = () => {
//     setTimeout(() => {
//       console.log("Wake up after " + time + "s!");
//       this.next();
//     }, time * 1000);
//   };
//   this.tasks.unshift(fn);
//   return this;
// };

// new LazyMan('hf').sleepFirst(2).eat('hh').sleep(5).eat('f')