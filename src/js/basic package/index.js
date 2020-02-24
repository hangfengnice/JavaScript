// top:
// for (var i = 0; i < 3; i ++ ) {
//   for (var j = 0; j < 3; j ++) {
//     if ( i == 1 && j ==1) continue top
//     console.log(i, j);
//   }
// }

// console.log(typeof 1234);
// console.log(typeof '123');
// console.log(typeof false);

// function f() {}
// console.log(typeof f);

// console.log(typeof undefined);

// console.log(typeof v);

// console.log(typeof window);
// console.log(typeof {});
// console.log(typeof []);


// var o = {}
// var a = []
// console.log(o instanceof Array);
// console.log(a instanceof Array);

// if (!undefined) {
//   console.log("undefined is here");
// }
// if (!null) {
//   console.log("null is here");
// }
// console.log(null == undefined);

// console.log(Number(null));

// console.log(Number(undefined));

// if ('') {
//   console.log('true');
// }

// if ([]) {
//   console.log('true');
// }
// if ({}) {
//   console.log('rue');
// }

// console.log(.1 + .2 === .3);

// console.log(.3 / .1);

// console.log(.3 - .2 === .2 - .1);

// console.log(Math.pow(2, 53));
// console.log(Math.pow(2, 53) + 1);
// console.log(Math.pow(2, 53) + 2);
// console.log(Math.pow(2, 53) + 3);
// console.log(Math.pow(2, 53) + 4);
// console.log(9007199254740992111);
// console.log(Math.pow(2, 1024));
// console.log(Math.pow(2, -1075));

// var x = .5
// for (var i = 0; i < 25; i ++) {
//   x = x * x
// }
// console.log(x);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// console.log(1234567890123456789012);
// console.log(
//   123456789012345678901);
//   console.log(.0000003);
//   console.log(.000005);
//   console.log(.10000005);


// console.log((-0).toString());
// console.log(+0..toString());

// console.log(0 / 0);
// console.log(typeof NaN);
// console.log(typeof NaN);
// console.log('hello'.indexOf('h'));
// console.log('NaN'.indexOf('NaN'));
// console.log([NaN].indexOf(NaN));

// console.log(Boolean(NaN));

// console.log(1 / -0);
// console.log(-1 / -0);
// console.log(5 / Infinity);
// console.log(parseInt('1234'));
// console.log(parseInt(12344));
// console.log(parseInt('  92'));
// console.log(parseInt('8a'));
// console.log(parseInt('12**'));
// console.log(parseInt('12.34'));
// console.log(parseInt("15e2"));
// console.log(parseInt('15px'));

// console.log(parseInt('abc'));
// console.log(parseInt('.3'));
// console.log(parseInt(''));
// console.log(parseInt('+'));
// console.log(parseInt('+1'));

// console.log(parseInt('0x10'));
// console.log(parseInt('011'));

// console.log(parseInt(1000000000000000000000.5));
// console.log(parseInt('0.00005'));
// console.log(parseInt(0.0000008));
// console.log(parseInt('100', 2));
// console.log(parseInt('10', 37));
// console.log(parseInt('10', 1));
// console.log(parseInt('10', 0));
// console.log(parseInt('10', null));
// console.log(parseInt('10', undefined));

// console.log(parseInt('1547', 2));
// console.log(parseInt('546', 2));

// console.log(parseInt(0x11, 36));
// console.log(parseInt(0x11, 2));
// console.log(parseFloat('314e-2'));
// console.log(parseFloat('\t\v\r12.34\n'));
// console.log(parseFloat([]));
// console.log(parseFloat('FF2'));
// console.log(parseFloat(''));

// console.log(isNaN(NaN));
// console.log(isNaN('a'));
// console.log(isNaN(21));
// console.log((function () {return 'hello'}).toString());
// console.log('1\n2');

// console.log('abc'[3]);
// console.log('abc'[-1]);
// console.log('abc'['x']);
// var s = 'hello'
// console.log(s.length);
// s.length = 2
// console.log(s.length);

// var s = '\u00A9'
// console.log(s);


// var string = 'Hello World'
// console.log(btoa(string));
// console.log(atob(b));

// btoa('hello')
// var obj = {
//   1: 'a',
//   3.2: 'b',
//   1e2: true,
//   1e-2: true,
//   .234: true,
//   0xff: true
// }
// console.log(obj);
// console.log(obj['100']);


// var obj = {
//   p: function (x) {
//     return 2 * x
//   }
// }
// console.log(obj.p(1));

// var o1 = {}
// var o2 = {bar: 'helo'}
// o1.foo = o2
// console.log(o1.foo.bar);

// ({foo: 123})

// var obj = {
//   0.7: 'hello world'
// }
// console.log(obj['0.7']);
// console.log(obj[0.7]);


// var obj = {
//   123: 'helo'
// }
// // console.log(obj.123);
// console.log(obj[123]);

// var obj = {
//   key1: 1,
//   key2: 2
// }
// console.log(Object.keys(obj));

// var obj = {p: 1}
// console.log(Object.keys(obj));

// console.log(delete obj.p);
// console.log(obj.p);
// console.log(Object.keys(obj));

// var obj = {}
// console.log(delete obj.p);

// var obj = Object.defineProperty({}, 'p', {
//   value: 123,
//   configurable: false
// })
// console.log(obj.p);
// console.log(delete obj.p);

// var obj = {}
// console.log(delete obj.toString);
// console.log(obj.toString);

// var obj = {p: 1}
// console.log('p' in obj);
// console.log('toString' in obj);

// var obj = {}
// if ('toString' in obj) {
//   console.log(obj.hasOwnProperty('toString'));
// }

// var obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// for (var i in obj) {
//   console.log('键名',i);
//   console.log(obj[i]);
// }

// var person = {name: '老张'}
// for (var key in person){
//   if (person.hasOwnProperty(key))
//   console.log(key);
// }

// var obj = {
//   p1: 1,
//   p2: 2
// }
// with(obj) {
//   p1 = 4
//   p2 = 5
// }

// console.log(obj);

// var obj = {}
// with(obj) {
//   p1 = 4
//   p2 = 5
// }
// console.log(obj.p1);
// console.log(p1);

// var print = function x () {
//   console.log(typeof x);
// }
// // console.log(x);

// print()

// var add = new Function(
//   'x',
//   'y',
//   'return x + y'
// )

// console.log(add(1, 3));

// function f() {
//   console.log(1);
// }
// f()
// function f() {
//   console.log(2);
// }
// f()
// function fib(num) {
//   if (num === 0) return 0
//   if (num === 1) return 1
//   return fib(num - 2) + fib(num - 1)
// }
// fib(3)
// console.log(fib(3));

// function f1() {}
// console.log(f1.name);

// var f2 = function () {}
// console.log(f2.name);

// var f3 = function my() {}
// console.log(f3.name);

// function f(a, b) {}
// console.log(f.length);

// function f() {
//   a()
//   b()
//   c()
// }
// console.log(f.toString());

// console.log(Math.sqrt.toString());

// var multiline = function (fn) {
//   var arr = fn.toString().split('\n')
//   return arr.slice(1, arr.length - 1).join('\n')
// }

// function f() {/*
//   hell o
//   worls
// */}
// console.log(multiline(f));

// var v = 1
// function f() {
//   var v = 2
//   console.log(v);
// }
// f()
// console.log(v);
// if (true) {
//   var x = 5
// }
// console.log(x);

// var a = 1
// var x = function () {
//   console.log(a);
// }
// function f() {
//   var a = 2
//   x()
// }
// f()

// var x = function () {
//   console.log(a);
// }
// function y(f) {
//   var a = 2
//   f()
// }
// y(x)

// function foo() {
//   var x = 1
//   function bar() {
//     console.log(x);
//   }
//   return bar
// }
// var x = 2
// var f = foo()

// f()

// function f(a, b) {
//   return a
// }
// // f( , 1)
// f(undefined, 1)

// var p = 2
// function f(p) {
//   p = 3
// }
// f(p)
// console.log(p);

// var obj = {p: 1}
// function f(o) {
//   o.p = 2
// }
// f(obj)
// console.log(obj.p);
// var obj = [1, 2, 3]
// function f(o) {
//   o = [2, 3, 4]
// }
// f(obj)
// console.log(obj);

// function f(a, a) {
//   console.log(a);
//   console.log(arguments[0]);
// }
// f(1, 3)

// f(1)

// var f = function (a, b) {
//   arguments[0] = 3
//   arguments[1] = 2
//   return a + b
// }
// console.log(f(1, 1));

// var f1 = function (a, b) {
//   'use strict'
//   arguments[0] = 3
//   arguments[1] = 2
//   return a + b
// }
// console.log(f1(1, 1));

// function h() {
//   console.log(arguments.callee);
// }
// h()

// function createIncrementor(start) {
//   return function () {
//     return start ++
//   }
// }

// var inc = createIncrementor(5)
// console.log(inc());
// console.log(inc());
// console.log(inc());

// function Person(name) {
//   var _age
//   function setAge(n) {
//     _age = n
//   }
//   function getAge() {
//     return _age
//   }
//   return {
//     name: name,
//     getAge,
//     setAge
//   }
// }

// var p1 = Person('zhangsan')
// p1.setAge(12)
// console.log(p1.getAge());

// eval('var a = 1')
// // eval('3x')
// // eval('return')
// console.log(eval(1));

// var a = 1
// eval('a = 2')
// // console.log(a);
// "use strict"
// // var foo = 1
// eval(' foo = 123')
// console.log(foo);

// var m = eval
// m('var x = 1')
// console.log(x);
// var a = 1;

// function f() {
//   var a = 2;
//   var e = eval;
//   e('console.log(a)');
// }

// f()


// console.log(typeof []);
// var arr = ['a', 'b', 'c']
// console.log(Object.keys(arr));

// var arr = ['a', 'b', 'c']
// // console.log(arr['0']);
// // console.log(arr[0]);

// // console.log((1.00).toString());
// console.log(arr.length);
// arr.length = 2
// console.log(arr);

// var a = ['a']
// a.length = 3
// console.log(a[1]);
// console.log([].length = -1);
// console.log([].length = Math.pow(2, 32));
// [].length= 'a'
// console.log(object);


// var arr = []
// arr[-1] = 'a'
// arr[Math.pow(2, 32)] = 'b'

// console.log(arr.length);
// console.log(arr[-1]);
// console.log(arr[4294967296]);

// var arr = ['a', 'b', 'c']
// console.log(2 in arr);
// console.log('2' in arr);
// console.log(4 in arr);


// var arr = []
// arr[100] = 'a'
// console.log(100 in arr);
// console.log( 1 in arr);

// var a = [1, 2, 3]
// a.foo = true
// for (var i in a) {
//   console.log(a[i]);
// }

// var colors = ['red', 'green', 'blue']
// colors.foo = 'helo'
// colors.forEach(function (color) {
//   console.log(color);
// })
// console.log(colors);

// var a = [1, 2, 3,]
// console.log(a.length);
// console.log(a);

// var a = [, , ,]
// console.log(a.length);
// console.log(a[1]);

// var a1 = [1, 2, 3]
// delete a1[1]
// console.log(a1[1]);
// console.log(a1.length);

// var a = [, , ,]
// var a = [undefined, undefined, undefined]
// a.forEach(function (x, i) {
//   console.log(i + ',' + x);
// })

// for (var i in a ) {
//   console.log(i);
// }
// console.log(Object.keys(a));

// var obj = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3
// }
// console.log(obj[0]);
// console.log(obj[1]);
// console.log(obj[2]);
// console.log(obj.length);
// // obj.push('d')


// var obj = {
//   length: 0
// }
// obj[3] = 'd'
// console.log(obj.length);

// function args() {return  arguments}
// var arrayLike = args('a', 'b')

// console.log(arrayLike[0]);
// console.log(arrayLike.length);
// console.log(arrayLike instanceof Array);


// Array.prototype.forEach.call('abc', function (chr) {
//   console.log(chr);
// })

// console.log(true + true);

// console.log('a' + 'bc');
// console.log(flase );

// var obj = {p: 1}
// console.log(obj + 2);

// console.log(obj.valueOf());

// var obj = {
//   toString: function () {
//     return 'hello'
//   }
// }
// console.log(obj + 2);

// var obj = new Date()
// obj.valueOf = function () {return 1}
// obj.toString = function () {return 2}

// console.log(obj + 2);

// var obj = {
//   valueOf: function () {
//     return ['hello']
//   }
// }
// console.log(obj + 1);

// console.log(-1 % 2);
// console.log(1 % -2);

// var v1 = {}
// var v2 = v1
// console.log(v1 === v2);

// console.log(undefined === undefined);
// console.log(null === null);

// var v1
// var v2
// console.log(v1 === v2);

// console.log(1 && 2 && 3);

// console.log(2147483649 | 0);

// console.log("00000000000000000000000000000011".length);

// var FlAG_A = 1
// var FLAG_B = 2
// var FLAG_C = 4
// var FlAG_D = 8

// var mask = FlAG_A | FLAG_B | FlAG_D
// console.log(mask);
// var x = 3
// console.log(void (x = 5));

// (a =1)

// (var a = 1)

// var obj = {
//   valueOf: function () {
//     return {}
//   },
//   toString: function () {
//     return {}
//   }
// }
// // console.log(String(obj));

// console.log([1].toString());

// var err = new Error('erroe')
// console.log(err.message);

// function throwit() {
//   throw new Error('')
// }
// function catchit() {
//   try {
//     throwit()
//   } catch(e) {
//     console.log(e.stack);
//   }
// }
// new Array(-1)
// new 123
// decodeURI('%2')
// function UserError(message) {
//   this.message = message || '默认信息'
//   this.name = 'UserError'
// }
// UserError.prototype = new Error()
// UserError.prototype.constructor = UserError

// throw new UserError('error')

// var n = 100

// try {
//   throw n
// } catch (e) {
//   if (e <= 50) {

//   } else   {
//     throw e
//   }
// }

// var count = 0
// function countUp () {
//   try {
//     return count
//   } finally {
//     count ++
//   }
// }
// console.log(countUp());
// console.log(count);

// function f() {
//   try {
//     console.log(0);
//     throw 'bug'
//   } catch(e) {
//     console.log(1);
//     return true
//     console.log(2);
//   } finally {
//     console.log(3);
//     return false
//     console.log(4);
//   }
//   console.log(5);
// }

// var result = f()

// console.log(result);

// console.log(' %s + %s + %s', 1 , 3 , 3);

// console.log('%c this is tyled', 'color: red; background: yellow; font-size: 24px');
// console.log({foo: 'bar'});
// console.log(Date);

// console.info({foo: 'helo'});

//  console.log = console.log.bind(console, new Date().toISOString())
//  console.log('hello ');

// console.log(object);
// console.warn('hello')
// console.error('world')

// let languages = [
//   {name: 'hang', file: '1', age: 1},
//   {name: 'ying', file: '2'}
// ]
// console.table(languages)

// function greet(user) {
//   console.count(user)
//   return 'hi ' + user
// }
// greet(1)
// greet(1)
// greet(2)
// greet(3)
// console.dir({helo: 'ahgnfneg'}, {colors: true})
// console.assert(false, 'hhh')
// console.time('Array initialize')
// var array = new Array(100000)
// for (var i = array.length - 1 ; i >= 0; i --) {
//   array[i] = new Object()
// }
// console.timeEnd('Array initialize')

// console.group('one')
// console.log('one text');

// console.group('two')
// console.log('two text');

// console.groupEnd();
// console.groupEnd();
// for (var i = 0; i < 5; i ++ ) {
//   console.log(i);
//   if (i == 2) debugger
// }

// var obj = Object()

// console.log(obj instanceof Object);

// var obj = Object(1)
// console.log(typeof obj);

// var arr = []
// var obj = Object(arr)
// console.log(obj == arr);

// var fn = function () {}
// var obj = Object(fn)
// console.log(fn === obj);

// var a = ['hello', 'world']
// console.log(Object.keys(a));
// console.log(Object.getOwnPropertyNames(a));

// var type = function (o) {
//   var s = Object.prototype.toString.call(o)
//   return s.match(/\[object ([^\]]*)\]/)[1].toLowerCase()
// }
// console.log(type({}));
// console.log(type([]));
// console.log(type(5));
// console.log(type(null));

// var type = function (o) {
//   var s = Object.prototype.toString.call(o)
//   return s.match(/\[object ([^\]]*)\]/)[1].toLowerCase()
// };

// ['Null',
// 'Undefined',
// 'Object'].forEach(function (t) {
//   type['is' + t] = function (o) {
//     return type(o) === t.toLowerCase()
//   }
// })

// type.isObject({})
// // console.log(type.isObject({}));

// var date = new Date()

// console.log(date.toString());
// console.log(date.toLocaleString());

// var obj = {p: 'a'}

// console.log(Object.getOwnPropertyDescriptor(obj, 'p'));
// console.log(Object.getOwnPropertyDescriptor(obj, 'toString'));

// var obj = Object.defineProperties({}, {
//   p1: {
//     value: 1,
//     enumerable: true
//   },
//   p2: {
//     value: 2,
//     enumerable: false
//   }
// })

// // console.log(Object.keys(obj));
// // console.log(Object.getOwnPropertyNames(obj));

// console.log(Object.keys(Object.prototype));
// console.log(Object.getOwnPropertyNames(Object.prototype));

// var obj = {}
// Object.defineProperty(obj, "p", {
//   // value: 134,
//   get: function () {return 123},
//   // writable: true
// })
// "use strict"

// var obj = {}
// Object.defineProperty(obj, "a", {
//   value: 23,
//   writable: true
// })
// obj.a = 23

// var proto = Object.defineProperty({}, "foo", {
//   value: 'a',
//   writable: false
// })
// var obj = Object.create(proto)
// // console.log(obj.foo= 'b');
// console.log(obj.foo);

// var proto = Object.defineProperty({}, "foo", {
//   value: 'a',
//   writable: false
// })

// var obj = Object.create(proto)
// Object.defineProperty(obj, 'foo', {
//   value: 'b'
// })
// console.log(obj.foo);

// var obj = Object.defineProperty({}, 'p', {
//   value: 1,
//   writable: false,
//   enumerable: false,
//   configurable: false
// })

// obj.p = 22
// console.log(obj.p);

// var extend = function (to, from) {
//   for (var property in from) {
//     to[property] = from[property]
//   }
//   return to
// }
// // console.log(extend({}, {a: 1}));

// console.log(extend({}, {
//   get a() {return 1}
// }));


// var extend = function (to, from ) {
//   for (var property in from) {
//     if (!from.hasOwnProperty(property)) continue
//     Object.defineProperty(
//       to, property,
//       Object.getOwnPropertyDescriptor(from, property)
//     )
//   }
//   return to
// }

// // console.log(extend({}, {get a() {return 1}}));
// extend({}, {get a () {return 1}})
// console.log(extend({ }, {get a () {return 1}}));

// var obj = new Object()
// console.log(Object.getOwnPropertyDescriptor(obj, ''));
// Object.preventExtensions(obj)

// console.log(Object.isExtensible(obj));
// Object.defineProperty(obj, 'p', {
//   value: 'hello'
// })
// obj.p =1
// obj.p

// var obj = {
//   p: 'a'
// }

// console.log(Object.getOwnPropertyDescriptor(obj, 'p'));

// Object.seal(obj)

// console.log(Object.getOwnPropertyDescriptor(obj, 'p'));
// obj.p = 'aa'
// console.log(obj.p);

// var obj = new Object()
// Object.preventExtensions(obj)

// var proto = Object.getPrototypeOf(obj)
// proto.t = 'hello'
// console.log(obj.t);

// var obj = {
//   foo: 1,
//   bar: ['a', 'b']
// }
// Object.freeze(obj)

// obj.bar.push('c')
// console.log(obj.bar);

// var arr = new Array(2)
// console.log(arr.length);
// console.log(arr);
// console.log(new Array('1', 'b'));


// console.log([].pop());

// var arr = ['c', 'd']
// console.log(arr.unshift('a', 'b'));
// console.log(arr.push('ss'));

// console.log([undefined, null].join('#'));

// var a = [1, 2, 3, 4]
// b = a.join()
// console.log(a);

// var numbers = [1, 2, 3]
// var newarr = numbers.map(function (n) {
//   return n + 2
// })
// console.log(newarr);
// console.log(numbers);

// var f = function (n) {return 'a'}
// console.log([1, undefined, 2].map(f));
// console.log([1, null, 3].map(f));
// console.log([1, , 2].map(f));

// let arr = [1, 2, 3, 4, 5]



// console.log(arr.filter(function (elem) {
//   return elem > 3
// }));


// let arr = []

// console.log([].some(function () {
//   console.log(1);
// }));
// console.log(arr.every(function () {
//   console.log(2);
// }));

// function findLongest(entries) {
//   return entries.reduce(function(longest, entry) {
//     return entry.length > longest.length ? entry: longest
//   }, "")
// }

// findLongest(['1111', '11'])
// console.log(findLongest(['111', '1']));

// var a = [1, 3, 3 ,4 ,5]

// console.log(a.indexOf(3, 2));
// console.log(a.lastIndexOf(3, 5));

// var users = [
//   {name: 'tom', email;}
// ]

// console.log(new Number(123).valueOf());
// console.log(new String('abc').valueOf());
// console.log(new Boolean(true).valueOf());


// console.log(new Number(123).toString());
// console.log(new String('abc').toString());
// console.log(new Boolean(true).toString());

// var str = 'abc'

// var strObj = new String(str)

// console.dir(strObj);

// String.prototype.double = function () {
//   return this.valueOf() + this.valueOf()
// }

// console.log('abc'.double());

// Number.prototype.double = function () {
//   return this.valueOf() + this.valueOf()
// }

// console.log((123).double());

// console.log(Boolean(undefined), Boolean(null), Boolean(0), Boolean(""), Boolean(NaN));

// console.log(10['toString'](2));

// (10).toFixed(2)

// console.log(typeof (10).toFixed(2));

// console.log((123).toLocaleString('zh-Hans-CN', {style: 'percent'}));


// console.log('a|b'.split());
// console.log(Math.min());
// console.log(Date(2000, 1, 1));
// var d = new Date(2017, 0, 1)
// console.log(d.getTimezoneOffset());
// console.log(d.toDateString());
// console.log(d.toTimeString());

// var r = /a|b/g
// r.lastIndex = 7

// console.log('xaxb'.match(r));
// console.log(r.lastIndex);

// var Vehicle = function () {
//   this.price = 1000
//   return ['1']
// }

// console.log(new Vehicle());

// var person = {
//   name: 'hangfeng',
//   describe: function () {
//     return 'name' + this.name
//   }
// }
// console.log(person.describe());

// var a = {
//   p: 'hello',
//   b: {
//     m: function() {
//       console.log(this.p);
//     }
//   }
// }

// console.log(a.b.m());


// var person = {
//   name: '张三',
//   describe: function () {
//     return "name" + this.name
//   }
// }

// console.log(person.describe());

// var A = {
//   name: 'hangfeng',
//   describe: function () {
//     return 'name:' + this.name
//   }
// }

// var B = {
//   name: 'yingying'
// }

// B.describe = A.describe

// console.log(B.describe());

// function f() {
//   return 'name' + this.name
// }

// var A = {
//   name: 'hangfneg',
//   describe: f
// }

// var B = {
//   name: 'yingyin',
//   describe: f
// }

// console.log(A.describe());
// console.log(B.describe());


// var a = {
//   name: 'hangfeng',
//   describe: function () {
//     return 'name' + this.name
//   }
// }
// console.log(this);
// console.log(a.describe);
// var name = 'lisi'
// var f = a.describe
// console.log(f);
// console.log(f());

// var f = function () {
//   console.log(this.x);
// }

// var x = 1
// var obj = {
//   f: f,
//   x: 2
// }

// console.log(f());

// console.log(obj.f());

// var Obj = function (p) {
//   this.p = p
// }

// var o = new Obj('hello world!')
// console.log(o.p);

// var obj = {
//   foo: function () {
//     console.log(this);
//   }
// }

// console.log(obj.foo());

// var a = {
//   p: 'hello',
//   b: {
//     m: function () {
//       console.log(this.p);
//     }
//   }
// }

// console.log(a.b.m());


// var b = {
//   m: function () {
//     console.log(this.p);
//   }
// }

// var a = {
//   p: 'hello',
//   b: b
// }

// console.log((a.b).m());

// var a = {
//   b: {
//     m: function () {
//       console.log(this.p);
//     },
//     p: 'hello'
//   }
// }

// console.log(a.b.m());


// var a = {
//   b: {
//     m: function () {
//       console.log(this.p);
//     },
//     p: 'hello'
//   }
// }
// var hello = a.b.m
// hello()

// var hello1 = a.b
// hello1.m()

// var o = {
//   f1: function () {
//     console.log(this);
//     var f2 = function () {
//       console.log(this);
//     }()
//   }
// }

// o.f1()

// var temp = function () {
//   console.log(this);
// }

// var o = {
//   f1: function () {
//     console.log(this);
//     var f2 = temp()
//   }
// }

// o.f1()

// var o = {
//   f1: function () {
//     console.log(this);
//     var that = this
//     var f2 = function () {
//       console.log(that);
//     }()
//   }
// }

// o.f1()

// var counter = {
//   count: 0
// }

// counter.inc = function () {
//   'use strict'
//   this.count ++
// }

// // var f = counter.inc
// // f()

// counter.inc()
// console.log(counter);

// var o = {
//   v: 'hello',
//   p: ['a1', 'a2'],
//   f: function f() {
//     // var that = this
//     this.p.forEach(function (item) {
//       // console.log(this);
//       console.log(this.v + ' ' + item);
//     }, this)
//   }
// }

// var obj = {}
// var f = function () {
//   return this
// }

// console.log(f() === global);
// console.log(f.call(obj) === obj);


// console.log(f.call(1));

// var n = 123
// var obj = {
//   n: 456
// }

// function a() {
//   console.log(this.n);
// }

// a.call()
// a.call(null)
// a.call(undefined)
// a.call(global)
// a.call(obj)

// function add(a, b) {
//   return a + b
// }
// console.log(add.call(this, 1, 3));

// var obj = {}
// // obj.hasOwnProperty('toString')
// console.log(obj.hasOwnProperty('toString'));

// obj.hasOwnProperty = function () {
//   return true
// }
// console.log(obj.hasOwnProperty('toString'));

// console.log(Object.prototype.hasOwnProperty.call(obj, 'toString'));


// function f(x, y) {
//   console.log(x , y);
// }

// // f.call(null, 1, 1)
// f.apply()

// var a = [10, 2, 4, 15, 9]

// console.log(Math.max.apply(null, a));


// console.log(Array.apply(null, ['1', , 'b']));

// var a = ['1', , 'b']
// function print (i) {console.log(i);}

// a.forEach(print)

// Array.apply(null, a).forEach(print)

// var d = new Date()
// console.log(d.getTime());

// // var print = d.getTime
// var print = d.getTime.bind(d)
// console.log(print());

// var counter = {
//   count: 0,
//   inc: function () {
//     this.count ++
//   }
// }

// var obj = {
//   count: 100
// }

// var func = counter.inc.bind(obj)
// func()
// console.log(obj.count);


// var add = function (x, y) {
//   return x * this.m + y * this.n
// }

// var obj = {
//   m: 2,
//   n: 2
// }

// var newAdd = add.bind(obj, 5)
// console.log(newAdd(5));


// function add(x,y) {
//   return x + y
// }

// var plus5 = add.bind(null, 5)
// console.log(plus5(10));

// var counter = {
//   count: 0,
//   inc: function () {
//     'use strict'
//     this.count ++
//   }
// }

// function callIt(callback) {
//   callback()
// }

// callIt(counter.inc.bind(counter))
// console.log(counter.count);

// var obj = {
//   name: 'hangfneg',
//   times: [1, 2, 3],
//   print: function () {
//     this.times.forEach(function (n) {
//       console.log(this.name);
//     }.bind(this))
//   }
// }

// obj.print()

// function Cat (name, color) {
//   this.name = name
//   this.color = color
// }

// var cat1 = new Cat('big', 'white')

// console.log(cat1.name);
// console.log(cat1.color);

// function Cat(name, color) {
//   this.name = name
//   this.color = color
//   this.meow = function () {
//     console.log('heihei');
//   }
// }

// var cat1 = new Cat('big', 'white')
// var cat2 = new Cat('second', 'black')

// console.log(cat1.meow === cat2.meow);

// function f() {}
// console.log(typeof f.prototype);

// function Animal(name) {
//   this.name = name
// }

// Animal.prototype.color = 'white'

// var cat1 = new Animal('大毛')

// var myArray = function () {}

// myArray.prototype = new Array()

// myArray.prototype.constructor = myArray

// var mine = new myArray()
// console.log(mine);

// mine.push(1, 3, 4)
// console.log(mine);

// console.log(mine.length);
// console.log(mine instanceof Array);

// function Foo() {}
// var f = new Foo()
// console.log(f.constructor.name);

// var obj = {foo: 123}

// console.log(obj instanceof Object);

// console.log(null instanceof Object);

// var obj  = Object.create(null)

// console.log(typeof obj);

// console.log(Object.create(null) instanceof Object);

// var s = 'hello'
// console.log(s instanceof String);

// console.log(undefined instanceof Object);
// console.log(null instanceof Object);


function Shape() {
  this.x = 0
  this.y = 0
}

Shape.prototype.move = function (x, y) {
  this.x += x
  this.y += y
  console.info('shape moved')
}
function Rectangle() {
  Shape.call(this)
}

// function Rectangle() {
//   this.base = Shape
//   this.base()
// }

// Rectangle.prototype = Object.create(Shape.prototype)

// Rectangle.prototype.constructor = Rectangle

// var rect = new Rectangle()
// console.log(rect instanceof Rectangle);
// console.log(rect instanceof Shape);

// function M1() {
//   this.hello = 'hello'
// }
// function M2() {
//   this.world = 'world'
// }

// function S() {
//   M1.call(this)
//   M2.call(this)
// }
// S.prototype = Object.create(M1.prototype)
// Object.assign = (S.prototype, M2.prototype)

// console.log(S.prototype);

// var s = new S()

// console.log(s.hello);
// console.log(s.world);

// var module1 = new Object({
//   _count: 0,
//   m1: function () {},
//   m2: function () {}
// })

// console.log(module1);

// function StringBuilder() {
//   var buffer = []
//   this.add = function (str) {
//     buffer.push(str)
//   }
//   this.toString = function () {
//     return buffer.join('')
//   }
// }

// var module1 = (function () {
//   var _count = 0
//   var m1 = function () {

//   }
//   var m2 = function () {}
//   return {
//     m1: m1,
//     m2: m2
//   }
// })();

// var module2 = (function (mod) {
//   mod.m3 = function () {}
//   return mod
// })(module1)

// console.log(module2);

// var F = function () {}
// var f = new F()

// console.log(Object.getPrototypeOf(f) === F.prototype);

// Object.getPrototypeOf({}) === Object.prototype

// console.log(Object.getPrototypeOf({}) === Object.prototype);

// console.log(Object.getPrototypeOf(Object.prototype) == null);
// function f() {}
// let a = new f()
// console.log(Object.getPrototypeOf(f) === Function.prototype);
// console.log(Object.getPrototypeOf(a) === f.prototype);

// var a = {}
// var b = {x: 1}
// Object.setPrototypeOf(a, b)

// console.log(Object.getPrototypeOf(a) === b);

// var a = Object.create(undefined)
// var a = Object.create([123])
// console.log(a);
// console.log(a.push);

// var obj = Object.create({}, {
//   p1: {
//     value: 123,
//     enumerable: true,
//     configurable: true,
//     writable: true
//   },
//   p2: {
//     value: 'abc',
//     enumerable: true,
//     configurable: true,
//     writable: true
//   }
// })

// console.log(obj);

// var o1 = {}
// var o2 = Object.create(o1)
// var o3 = Object.create(o2)

// console.log(o2.isPrototypeOf(o3));

// console.log(Object.prototype.isPrototypeOf(Object.create(null)));


// var obj = {}
// var p = {}
// obj.__proto__ = p
// Object.getPrototypeOf(obj) === p
// console.log(Object.getPrototypeOf(obj) == p);

// var A = {
//   name: 'san'
// }

// var B = {
//   name: 'si'
// }

// var proto = {
//   print: function () {
//     console.log(this.name);
//   }
// }

// A.__proto__ = proto
// B.__proto__ = proto

// A.print()
// B.print()


// A.print = B.print
// console.log(A.print == B.print);

// console.log(A.print == proto.print);


// var P = function () {}

// var p = new P()

// var C = function () {}

// C.prototype = p

// var c = new C()

// console.log(c.constructor.prototype === p);


// var o1 = {p1: 123}

// var o2 = Object.create(o1, {
//   p2: {value: 'abc', enumerable: true}
// })

// for (p in o2) {
//   console.info(p)
//   console.log(p);
// }

// function inheritedPropertyNames(obj) {
//   var props = {}
//   while(obj) {
//     Object.getOwnPropertyNames(obj).forEach(function (p){
//       props[p] = true
//     })
//     obj = Object.getPrototypeOf(obj)
//   }
//   return Object.getOwnPropertyNames(props)
// }

// console.log(inheritedPropertyNames(Date));

// let obj = {
//   name: 'hangfeng'
// }

// console.log(Object.getOwnPropertyNames(obj));


// function copyObject(orig) {
//   var copy = Object.create(Object.getPrototypeOf(orig))

// }

// function copyOwnPropertiesFrom(target, source) {
//   Object.getOwnPropertyNames(source)
//   .forEach(function (propKey) {
//     var desc = Object.getOwnPropertyDescriptor(source, propKey)
//     Object.defineProperty(target, propKey, desc)
//   })

//   return target
// // }
// 'use strict'

// function ff() {
//   console.log(arguments);
// }

// 'use strict'
// var obj = {
//   get v() {return 1}
// }
// obj.v = 2


// function async(arg, callback) {
//   console.log(' 参数为 ' + arg + ' , 1秒后返回结果');
//   setTimeout(function () {callback(arg * 2)}, 1000)
// }

// function final(value) {
//   console.log('完成 ', value);
// }

// async(1, function (value) {
//   async(2, function (value) {
//     async(3, function (value) {
//       async(4, function (value) {
//         async(5, function (value) {
//           async(6, final)
//         })
//       })
//     })
//   })
// // })

// var items = [1, 2, 3, 4, 5, 6]
// var results = []
// var running = 0
// var limit = 2
// function async(arg, callback) {
//   console.log('参数为 ' + arg + ' ,1秒后返回结果');
//   setTimeout(() => {
//     callback(arg * 2)
//   }, 1000);
// }
// function final(value) {
//   console.log('finish', value);
// }

// function launcher() {
//   while(running < limit && items.length > 0) {
//     var item = items.shift()
//     async(item, function (result) {
//       results.push(result)
//       running --
//       if (items.length > 0) {
//         launcher()
//       } else if (running == 0) {
//         final(results)
//       }
//     })
//     running ++
//   }
// }
// launcher()

// setInterval(function (a, b, c, d, e, f) {
//   console.log(a, b, c, d, e,f );
// }, 2000, 2, 3, 4, 5, 6, 6)

// setInterval(function () {
//   console.log(2);
// }, 1000)
// sleep(3000)

// function sleep(ms) {
//   var start = Date.now()
//   while(Date.now() - start < ms) {}
// }

// new Promise(function (resolve, reject) {
//   resolve(1)
// }).then(console.log)

// console.log(2);

// function isType(type) {
//   return function (obj) {
//     return Object.prototype.toString.call(obj).includes(type)
//   }
// }
// let types = ['String', 'Object', 'Function']

// let fns = {}
// types.forEach(type => {
//   fns['is' + type] = isType(type)
// })

// let a = function () {}

// console.log(fns.isFunction(a));

// function after (times, callback) {
//   let total = 0
//   return function (a) {
//     total += a
//     console.log(times);
//     if (--times == 0) {
//       callback(total)
//     }
//   }
// }
// let fn = after(3, function (total) {
//   console.log('after', total);
// })

// fn(1)
// fn(2)
// fn(3)
// function say() {
//   console.log('say');
// }

// Function.prototype.before = function (fn) {
//   let that = this
//   return function () {
//     fn()
//     that()
//   }
// }

// let newFn = say.before(function () {
//   console.log('later say');
// })

// newFn()

// let corp = {}
// // corp.list = []
// corp.list = {}


// corp.on = function (key, fn) {
//   if (!this.list[key]) {
//     this.list[key] = []
//   }
//   this.list[key].push(fn)
// }

// corp.emit = function () {
//   let key = [].shift.call(arguments),
//   fns = this.list[key];

//   if (!fns || fns.length == 0) {
//     return false
//   }

//   fns.forEach(cb => {
//     cb.apply(this, arguments)
//   })
// }

// corp.on('join', function (position, salary) {
//   console.log('你的职位是： ' + position);
//   console.log('期望薪水： ' + salary);
// })
// corp.on('other', function (skill, hobby) {
//   console.log('你的技能有： ' + skill)
//   console.log('爱好： ' + hobby);
// })

// corp.emit('join', '前端', 10000)
// corp.emit('other', '端茶和倒水', '足球')


// let event = {
//   list: {},
//   on(key, fn) {
//     if (!this.list[key]) {
//       this.list[key] = []
//     }
//     this.list[key].push(fn)
//   },
//   emit () {
//     let key = [].shift.call(arguments),
//     fns = this.list[key]

//     if (!fns || fns.length == 0) {
//       return false
//     }
//     fns.forEach(fn => {
//       fn.apply(this, arguments)
//     })
//   },
//   remove(key, fn) {
//     let fns = this.list[key]
//     if (!fns) return false
//     if (!fn) {
//       fns && (fns.length = 0)
//     } else {
//       fns.forEach((cb, i ) => {
//         if (cb === fn) {
//           fns.splice(i, 1)
//         }
//       })
//     }
//   }
// }
// let event = {
//   list: {},
//   on(key, fn) {
//     if (!this.list[key]) {
//       this.list[key] = []
//     }
//     this.list[key].push(fn)
//   },
//   emit() {
//     let arg = [...arguments]
//     let key = arg.shift()
//     let fns = this.list[key]
//     if (!fns || fns.length <= 0) return false

//     fns.forEach(fn => {
//       fn.apply(this, arg)
//     })
//   }
// }
// event.on('dog', (name) => {
//   console.log('dod' + name);
// })
// event.on('cat', (name) => {
//   console.log('cat' + name);
// })

// event.emit('dog', 'jiafei')
// event.emit('cat', 'haha')


// console.log('dog'.search('d'));

// console.log(/^.*\//.exec('/usr/local/bin/python'));
// console.log(/[.]/.test('hello.'));

// var tagregex = /^<('[^']*'|\"[^\"]*\"|[^'\">])+>$/

// console.log(tagregex.test("<input name=txt value=\">\">"));
// console.log(tagregex.test("<input name=txt value='>'>"));
// console.log(tagregex.test("<a>"));

// console.log(/[^ho]/.test('hoa'));

console.log(/(\d){4}-(\d{2})-(\d{2})/.exec('2010-12-12'));
