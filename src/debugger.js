var str = '123456789'

var reg = /\B(?=(\d{3})+\b)/g

console.log(str.replace(reg, ','));

var obj = {}
let a = obj
a.name = 'hf'

console.log(obj);


// function _new () {
//   var args = [].slice.call(arguments)
//   let constructor = args.shift()
//   let context = Object.create(constructor.prototype)
//   var result = constructor.apply(context, args)
//   return result ==
// }

function Test () {
  return function hello() {

  }
}

let instance = new Test()
console.log(instance);
