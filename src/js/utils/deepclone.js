var arr = [
  function() {
    console.log("a");
  },
  {
    b: function() {
      console.log(b);
    }
  }
];

var new_arr = JSON.parse(JSON.stringify(arr))
// console.log(new_arr);

var deepCopy = function (obj) {
  if (typeof obj != 'object') return 
  var newObj = obj instanceof Array ? [] : {}
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}

var obj1 = {
  name: 'hangfeng',
  power: {
    age: 12
  },
  car: ["red", "blue", "lightpink"]
}
console.log(deepCopy(obj1));

function extend() {
  var name, options, copy;
  var length = arguments.length
  var i = 1;
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

var testObj1 = {
  name: 'hangfeng',
  b: {
    b1: 1,
    b2: 2
  }
}
var testObj2 = {
  name: 'yingying',
  b: {
    b1: 3,
    b2: 4
  }
}
console.log(extend(testObj1, testObj2));

function finalExtend() {
   var deep = false, name, options, src, copy, length = arguments.length, i =1;
   var target = arguments[0] || {}
   if (typeof target == 'boolean') {
     deep = target
     target = arguments[1] || {}
     i ++
   }
   if (typeof target !== 'object') {
     target = {}
   }

   for (; i < length; i ++) {
     options = arguments[i]
     if (options != null) {
       src = target[name]
       copy = options[name]
       if (deep && copy && typeof copy == 'object') {
         target[name] = finalExtend(deep, src, copy)
       } else if (copy != undefined) {
         target[name] = copy
       }
     }
   }
   return target
}