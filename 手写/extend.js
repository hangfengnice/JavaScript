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




var obj1 = {
  a: 1,
  b: { b1: 1, b2: 2 }
};

var obj2 = {
  b: { b1: 3, b3: 4 },
  c: []
};

var obj3 = {
  d: 4
}

function extend() {
  var deep = false;
  var name, options, src, copy;
  var clone, copyIsArray;

  var length = arguments.length;

  var i = 1;

  var target = arguments[0] || {};

  if (typeof target == "boolean") {
    deep = target;
    target = arguments[i] || {};
    i++;
  }
  if (typeof target != "object" && !isFunction(target)) {
    target = {};
  }

  for (; i < length; i++) {
    options = arguments[i];
    if (options) {
      for (name in options) {
        src = target[name];
        copy = options[name];

        if (target == copy) continue

        if (deep && copy && typeof copy == "object" && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false
            clone = src && Array.isArray(src) ? src : []
          } else {
            clone = src && isPlainObject(src) ? src : {}
          }
          target[name] = extend(deep, clone, copy);
        } else if (copy) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}


let res = extend(true, obj1, obj2, obj3)

console.log(res);
var a = extend(true, [4, 5, 6, 7, 8, 9], [1, 2, 3]);
// console.log(a)

var obj1 = {
  value: {
      3: 1
  }
}

var obj2 = {
  value: [5, 6, 7],

}


var b = extend(true, obj1, obj2) // ???
var c = extend(true, obj2, obj1) // ???

// console.log(b, c)

