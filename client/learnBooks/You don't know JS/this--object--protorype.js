// this 和对象原型
{
  // let myObject = {
  //   a: 2
  // }
  // let object = Object.create(myObject)

  // Object.defineProperty(myObject, "a", {
  //   configurable: true,
  //   writable: false,
  //   enumerable: false
  // })
  // console.log(myObject)
  // console.log(object)
  // object.a = 3
  // console.log(object)
  // Object.defineProperty(object, 'a', {
  //   value: 3
  //   // configurable: true 
  // })
  // console.log(object);

  // myObject.a = 3
  // console.log(myObject);
  // 在 configurable 为 false 时, 将 writeable 从 true 变为 false 可以操作
}
{
  function isRelateTo(o1, o2){
    function F(){}
    F.prototype = o2
    return o1 instanceof F
  }

  let a = {}
  let b = Object.create(a)
  console.log(isRelateTo(b, a))

  let bar = Object.create(null)
  console.log(bar)
}

let Foo = {}
var a1 = Object.create(Foo)
// Foo.prototype.constructor = function Gecko() {}
// console.log(a1.constructor)
Object.defineProperty(Foo, 'constructor', {
  value: function Gotcha() {}
})
console.log(a1)

