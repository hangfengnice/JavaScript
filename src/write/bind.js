Function.prototype.bind2 = function (context) {
  if (typeof this != 'function') {
    throw new Error('need function')
  }
  var self = this
  var args = [...arguments].slice(1)

  var fBound = function () {
    return self.apply(this instanceof fBound ? this : context, args.concat(...arguments))
  }
  fBound.prototype = Object.create(this.prototype)
  return fBound
}

// var value = 2
// var foo = {
//   value: 1
// }

// function bar(name, age) {
//   this.habit = 'shopping'
//   console.log(this.value);
//   console.log(name);
//   console.log(age);
// }
// bar.prototype.friend = 'kevin'

// var bindFoo = bar.bind2(foo, 'daisy')
// var obj = new bindFoo('18')
// console.log(obj.habit);
// console.log(obj.friend);
// bindFoo('19')
