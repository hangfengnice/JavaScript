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
// console.log(Object.getOwnPropertyDescriptor(obj, "p"));// Object {
// //   value: "a",
// //   writable: true,
// //   enumerable: true,
// //   configurable: true
// // }

// Object.seal(obj);
// obj.x = "heloo"

// // var proto = Object.getPrototypeOf(obj)
// // proto.z = 'z'
// // // seal方法之后
// // console.log(Object.getOwnPropertyDescriptor(obj, "p"));
// // console.log(obj.x, obj.z)

// // new Array([1]);
// // console.log(new Array([1]))
// // var arr = [1, 2, 3, undefined, 4, null];

// // console.log(arr.join(" "));
// // console.log(arr.toString())

// // console.log([].pop())

// // var arr = ["a", "b", "c"]

// // console.log([1, 2].map(function (item) {
// //   console.log(this)
// //   return this[item];
// // }, arr));

// // console.log(undefined + 1)

// // console.log(+undefined)

// // var arr = [1, 2, 3, 4, 5];
// // console.log(arr.some(function(elem, index, arr) {
// //   return elem >= 3;
// // }))

// // function isEven(x) { console.log('s') }

// // // console.log([].some(isEven)) // false
// // console.log([1].every(isEven))

// // function findLongest(entries) {
// //   return entries.reduce(function(longest, entry) {
// //     return entry.length > longest.length ? entry : longest;
// //   }, "");
// // }

// // findLongest(["aaa", "bb", "c"]);

// // var s = "str"

// // s.x = 'hello'
// // console.log(s.x)

// // console.log(Boolean(false), Boolean('false'), new Boolean(false))

// // if (Boolean(false)) {
// //   console.log("true");
// // }

// // console.log("JavaScript".substring(4, -3));

// // console.log("cat, bat, sat, fat".match("at"));

// // ;
// // console.log(Math.round(-1.5));

// // console.log(new Date(2013, 0, 1, 0, 0, 0, 0));

// // console.log(new Date("2013-2-15"), new Date(2013, 0));


// // Date.now();
// // console.log(Date.now());



// // // console.log(d.toJSON());
// // new Date("January 6, 2013");
// // console.log( new Date(2013, 0, 1).getTimezoneOffset())

// // console.log(new RegExp("").test("abc"));

// var s = '_x_x';
// var r1 = /x/;
// var r2 = /y/;

// r1.exec(s) // ["x"]
// console.log(r2.exec(s)); // null

// var r = /a|b/g;
// r.lastIndex = 7;
// console.log("xaxb".match(r)); // ['a', 'b']
// console.log(r.lastIndex); // 0

// // $&：匹配的子字符串。
// // $`：匹配结果前面的文本。
// // $'：匹配结果后面的文本。
// // $n：匹配成功的第n组内容，n是从1开始的自然数。
// // $$：指代美元符号$。

// console.log("aaa*a*".split(/(a*)/));
// console.log('abcabc'.match(/(.)b(.)/g))
// console.log(JSON.stringify('ok'))
// console.log(JSON.parse("false"))

// var obj = {
//   a: undefined,
//   b: function() {}
// };

// console.log(JSON.stringify(obj));

// var arr = [undefined, function() {}];
// console.log(JSON.stringify(arr));

// console.log(JSON.stringify(/foo/))

// var obj = {
//   'prop1': 'value1',
//   'prop2': 'value2',
//   'prop3': 'value3'
// };

// var selectedProperties = ['prop1', 'prop2'];

// // console.log(JSON.stringify(obj, selectedProperties));
// // // "{"prop1":"value1","prop2":"value2"}"

// // console.log(JSON.stringify(["a", "b"], [0]))
// // // "["a","b"]"

// // JSON.stringify({ 0: "a", 1: "b" }, ["0"]);

// // function f(key, value) {
// //   if (typeof value === "number") {
// //     value = 2 * value;
// //   }
// //   return value;
// // }

// // console.log(JSON.stringify([2,3,4], f));

// // var o = { a: { b: 1 } };

// // function f(key, value) {
// //   console.log("[" + key + "]:" + value);
// //   return value;
// // }

// // console.log(JSON.stringify(o, f));

// function f(key, value) {
//   if (typeof value === "string") {
//     return undefined;
//   }
//   return value;
// }

// console.log(JSON.stringify({ a: "abc", b: 123 }, f));

// console.log(JSON.stringify({ p1: 1, p2: 2 }, null, "pppppppp"))

// RegExp.prototype.toJSON = RegExp.prototype.toString;
// console.log(JSON.stringify(/foo/)); 

// // var F = function() {};
// // var f = new F();
// // console.log(Object.getPrototypeOf(f) === F.prototype);

// function async(arg, callback) {
//   console.log("参数为 " + arg + " , 1秒后返回结果");
//   setTimeout(function() {
//     callback(arg * 2);
//   }, 1000);
// }

// function final(value) {
//   console.log("完成: ", value);
// }

// async(1, function(value) {
//   // async(2, function(value) {
//   //   async(3, function(value) {
//   //     async(4, function(value) {
//   //       async(5, function(value) {
//   //         async(6, final);
//   //       });
//   //     });
//   //   });
//   // });
// });

// var items = [1, 2, 3, 4, 5, 6];
// // console.log(items.shift())
// var results = [];

// function async(arg, callback) {
//   console.log("参数为 " + arg + " , 1秒后返回结果");
//   setTimeout(function() {
//     callback(arg * 2);
//   }, 1000);
// }

// function final(value) {
//   console.log("完成: ", value);
// }

// function series(item) {
//   // console.log(item)
//   if (item) {
//     async(item, function(result) {
//       console.log(result)
//       results.push(result);
//       return series(items.shift());
//     });
//   } else {
//     return final(results[results.length - 1]);
//   }
// }

// series(items.shift());

// setTimeout((a, b, c, d ,e) => {
//   console.log('hello')
//   console.log(a, b, c, d, e);

// }, 1000, 1, 2, 3,4,5)

// setInterval((a, b, c, d) => {
//   console.log(a, b, c, d);
// }, 500, 1, 2, 3, 4);

// function debounce(fn, delay) {
//   var 
// }

