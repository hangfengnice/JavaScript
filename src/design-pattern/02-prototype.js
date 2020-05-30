function shallowCopy(source) {
  var target = {}
  for (var i in source) {
    if (source.hasOwnProperty(i)) {
      target[i] = source[i]
    }
  }
  return target
}

var obj = {
  lists: [1, 2]
}
let copy = shallowCopy(obj)
copy.lists.push(3)

console.log(obj, copy);
