// var arr = []
// var obj = Object(arr)
// console.log(obj === arr)

// var arr = {};
// var obj = Object(arr);
// console.log(obj === arr);

// var arr = function () {};
// var obj = Object(arr);
// console.log(obj === arr);

var obj = new Object(123);
obj instanceof Number; 


// Object.getOwnPropertyDescriptor()：获取某个属性的描述对象。
// Object.defineProperty()：通过描述对象，定义某个属性。
// Object.defineProperties()：通过描述对象，定义多个属性。
// （2）控制对象状态的方法

// Object.preventExtensions()：防止对象扩展。
// Object.isExtensible()：判断对象是否可扩展。
// Object.seal()：禁止对象配置。
// Object.isSealed()：判断一个对象是否可配置。
// Object.freeze()：冻结一个对象。
// Object.isFrozen()：判断一个对象是否被冻结。
// （3）原型链相关方法

// Object.create()：该方法可以指定原型对象和属性，返回一个新的对象。
// Object.getPrototypeOf()：获取对象的Prototype对象。

// Object.prototype.valueOf()：返回当前对象对应的值。
// Object.prototype.toString()：返回当前对象对应的字符串形式。
// Object.prototype.toLocaleString()：返回当前对象对应的本地字符串形式。
// Object.prototype.hasOwnProperty()：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。
// Object.prototype.isPrototypeOf()：判断当前对象是否为另一个对象的原型。
// Object.prototype.propertyIsEnumerable()：判断某个属性是否可枚举

var obj = new Object();

// obj.toString = function() {
//   return "hello";
// };

// obj.valueOf = function() {
//   return "value";
// };

// console.log(obj + " " + "world")

// var date = new Date();
// console.log(date.toString()); // "Tue Jan 01 2018 12:01:33 GMT+0800 (CST)"
// console.log(date.toLocaleString())


// 描述行对象

// var obj = { p: "a" };
// // console.log(Object.getOwnPropertyDescriptor(obj, "toString"))


// Object.defineProperty(obj, "p", {
//   // writable: true,
//   // value: 123,
//   get: function() {
//     return 456;
//   }
// });

// var obj = {};
// // Object.defineProperty(obj, "foo", {});
// // console.log(Object.getOwnPropertyDescriptor(obj, "foo"))

// Object.defineProperty(obj, "x", {
//   value: 123,
//   configurable: true,
//   writable: false
// });
// obj.x = 2222

// console.log(obj.x)

var obj = {
  p: "a"
};

// seal方法之前
;
console.log(Object.getOwnPropertyDescriptor(obj, "p"));// Object {
//   value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Object.seal(obj);
obj.x = "heloo"

var proto = Object.getPrototypeOf(obj)
proto.z = 'z'
// seal方法之后
console.log(Object.getOwnPropertyDescriptor(obj, "p"));
console.log(obj.x, obj.z)
