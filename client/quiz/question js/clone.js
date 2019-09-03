// function person(pname) {
//   this.name = pname
// }

// const Messi = new person("Messi")

// function say() {
//   console.log("hi")
// }

// const oldObj = {
//   a: say,
//   b: new Array(3),
//   c: new RegExp('ab+c', 'i'),
//   d: Messi
// }
// console.log(new Array(1, 2))
// const newObj = JSON.parse(JSON.stringify(oldObj))
// console.log(newObj.d.constructor, oldObj.d.constructor)

// 看到在对函数、正则对象、稀疏数组等对象克隆时会发生意外，构造函数指向也会发生错误。

// const oldObj1 = {}
// oldObj1.a = oldObj1
// console.log(oldObj1)

// const newObj1 = JSON.parse(JSON.stringify(oldObj1))
// console.log(newObj1)

// const isType = (obj, type) => {
//   if (typeof obj !== 'object') return false;
//   const typeString = Object.prototype.toString.call(obj);
//   let flag;
//   switch (type) {
//     case "Array":
//       flag = typeString === "[object Array]";
//       break;
//     case "Date":
//       flag = typeString === "[object Date]";
//       break;
//     case "RegExp":
//       flag = typeString === "[object RegExp]";
//       break;
//     default:
//       flag = false
//   }
//   return flag
// }

// const arr = Array.of(3, 4, 5, 2)

// console.log(isType(arr, "Array"))

// const getRegExp = re => {
//   var flags = ""
//   if (re.global) flags += "g"
//   if (re.ignoreCase) flags += "i";
//   if (re.multiline) flags += "m";
//   return flags
// }

// const clone = parent => {
//   const parents = []
//   const children = []
//   const _clone = parent => {
//     if ()
//   }
// }

function clone(target, map = new WeakMap()) {
  if(typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {}
    if(map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget)

    for(const key in target) {
      cloneTarget[key] = clone(target[key], map)
    }
    return cloneTarget
  } else {
    return target
  }
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: 'child'
  },
  field4: [2, 3, 4]
}

target.target = target

console.log(clone(target))


function debounce(fn, delay){
  let timer
  return function () {
    let args = [].slice.call(arguments)
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    })
  }
}

