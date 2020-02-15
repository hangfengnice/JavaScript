function F (name) {
  this.name = name
  return 1
}

let f = new F('hangfneg')
console.log(f.name);

function new1 () {
  let obj = {}
  Constructor = [].shift.call(arguments)
  obj.__proto__ = Constructor.prototype
  let ret = Constructor.apply(obj, arguments)
  return typeof ret == 'object' ? ret || obj : obj
}
