var class2type = {};

// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function(item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
})

function type(obj) {
  if (!obj) {
    return obj + ''
  }
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[Object.prototype.toString.call(obj)] || "object" :
        typeof obj;
}
function isFunction (obj) {
  return type(obj) == 'function'
}

var isArray = Array.isArray || function (obj) {
  return type(obj) == 'array'
}
var toString = class2type.toString;

// 相当于 Object.prototype.hasOwnProperty
var hasOwn = class2type.hasOwnProperty;

function isPlainObject(obj) {
  debugger
  var proto, Ctor

  if (!obj || toString.call(obj) !== '[object Object]') {
    return false
  }
  proto = Object.getPrototypeOf(obj)

  if (!proto) return true

  Ctor = hasOwn.call(proto, 'constructor') && proto.constructor

  return typeof Ctor === "function" && hasOwn.toString.call(Ctor) === hasOwn.toString.call(Object)
}

function isEmptyObject(obj) {
  var name
  for(name in obj) {
    return false
  }
  return true
}

function isWindow( obj ) {
  return obj != null && obj === obj.window;
}

function isArrayLike(obj) {
  var length = !!obj && 'length' in obj && obj.length
  var typeRes = type(obj)

  if (typeRes == 'function' || isWindow(obj)) return false

  return typeRes == 'array' || length == 0 ||
  typeof length == 'number' && length > 0 && (length - 1) in obj
}

function isElement(obj) {
  return obj && obj.nodeType === 1
}



