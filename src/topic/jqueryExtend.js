function extend () {
  var name, options, copy
  var length = arguments.length
  var i = 1
  var target = arguments[0]

  for (; i < length; i ++) {
    options = arguments[i]
    if (options != null) {
      for (name in options) {
        copy = options[name]
        if (copy != undefined) {
          target[name] = copy
        }
      }
    }
  }
  return target
}

function extend () {
  var deep = false
  var name, options, src, copy, clone, copyIsArray
  var length = arguments.length
  var i = 1

  var target = arguments[0] || {}
  if (typeof target == 'boolean') {
    deep = target
    target = arguments[i] || {}
    i ++
  }
  if (typeof target !== 'object' && !isFunction(target)) {
    target = {}
  }
  for (; i < length; i ++) {
    options = arguments[i]
    if (options != null) {
      for (name in options) {
        src = target[name]
        copy = options[name]

        if (target == copy) continue

        if (deep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false
            clone = src && Array.isArray(src) ? src : []
          } else {
            clone = src && isPlainObject(src) ? src : {}
          }
          target[name] = extend(deep, clone, copy)
        } else if (copy !== undefined) {
          target[name] = copy
        }
      }

    }
  }
  return target
}


// var obj1 = {
//   a: 1,
//   b: {
//     c: 2
//   }
// }

// var obj2 = {
//   b: {
//     c: [5]
//   }
// }

// var d = extend(true, obj1, obj2)
// console.log(d);


// var a = extend(true, [4, 5, 6, 7, 8, 9], [1, 2, 3]);
// console.log(a)
// var obj1 = {
//   value: {
//       3: 1
//   }
// }

// var obj2 = {
//   value: [5, 6, 7],

// }

// var b = extend(true, obj1, obj2) // ???
// var c = extend(true, obj2, obj1)
// console.log(b);
// console.log(c);
