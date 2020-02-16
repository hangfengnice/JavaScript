var class2type = {}
"Boolean Number String Function Array Date RegExp Object Error".split(" ")
.map(item => class2type["[object " + item + "]"] = item.toLocaleLowerCase())

function type(obj) {
  if (obj == null) {  // 搞定 null undefined
    return obj + ""
  }
  return typeof obj === "object" || typeof obj === 'function' ? 
  class2type[Object.prototype.toString.call(obj)] || "object" : typeof obj
}

console.log(type(undefined));