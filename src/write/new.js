function objectFactroy() {
  // var obj = Object.create(null)
  var obj = new Object()
  var args = [...arguments]
  var Constructor = args.shift()
  obj.__proto__ = Constructor.prototype
  var ret = Constructor.apply(obj, args)
  return typeof ret == 'object' || typeof ret == 'function' ? ret : obj
}

// function Otaku (name, age) {
//   this.name = name
//   this.age = age
//   this.habit = 'games'
// }
// Otaku.prototype.strength = 60

// Otaku.prototype.sayYourName = function () {
//   console.log('i am' + this.name);
// }

// var person = objectFactroy(Otaku, 'kevin', 10)
// console.log(person.name);
// console.log(person.habit);
// console.log(person.strength);
// person.sayYourName()
