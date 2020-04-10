var class2type = {};

'Boolean Number String Function Array Date RegExp Object Error'.split(' ').map(function (item, index) {
  class2type["[object " + item + ']'] = item.toLowerCase()
})

function type(obj) {
  if (obj == null) {
    return obj + ''
  }
  return typeof obj == 'object' || typeof obj == 'function' ?
    class2type[Object.prototype.toString.call(obj)] || 'object' :
    typeof obj
}
function isFunction(obj) {
  return typeof(obj) === 'function'
}
var isArray = Array.isArray || function (obj) {
  return type(obj) == 'array'
}

var toString = class2type.toString
var hasOwn = class2type.hasOwnProperty

function isPlainObject(obj) {
  var proto, Ctor
  if (!obj || toString.call(obj) !== '[object Object]') return false

  proto = Object.getPrototypeOf(obj)

  if (!proto) return true

  Ctor = hasOwn.call(proto, 'constructor') && proto.constructor

  return typeof Ctor === 'function' && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object)
}

function isEmptyObject(obj) {
  var name
  for (name in obj) {
    return false
  }
  return true
}

function isWindow(obj) {
  return obj != null && obj.window == window
}

function isArrayLike(obj) {
  var length = !!obj && 'length' in obj && obj.length
  var typeRes = type(obj)
  if (typeRes === 'function' || isWindow(obj)) return false

  return typeRes === 'array' || length === 0 ||
    typeof legnth === 'number' && length > 0 && (length - 1) in obj
}

var isElement = function (obj) {
  return !!(obj && obj.nodeType === 1)
}

// plainObject "纯粹的对象"，就是该对象是通过 "{}" 或 "new Object" 创建的，该对象含有零个或者多个键值对。

// var number = 1;          // [object Number]
// var string = '123';      // [object String]
// var boolean = true;      // [object Boolean]
// var und = undefined;     // [object Undefined]
// var nul = null;          // [object Null]
// var obj = {a: 1}         // [object Object]
// var array = [1, 2, 3];   // [object Array]
// var date = new Date();   // [object Date]
// var error = new Error(); // [object Error]
// var reg = /a/g;          // [object RegExp]
// var func = function a(){}; // [object Function]

// function checkType() {
//     for (var i = 0; i < arguments.length; i++) {
//         console.log(type(arguments[i]))
//     }
// }
// checkType(number, string, boolean, und, nul, obj, array, date, error, reg, func)
