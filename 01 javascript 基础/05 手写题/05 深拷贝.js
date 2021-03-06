const isObject = (target) =>
  (typeof target == "object" || typeof target == "function") && target !== null;

const getType = target => Object.prototype.toString.call(target)

const deepClone = (target, map = new Map()) => {
  if (map.get(target)) {
    return target
  }

  if (isObject(target)) {
    map.set(target, true)
    const cloneTarget = Array.isArray(target) ? [] : {}
    for(let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = deepClone(target[prop])
      }
    }
    return cloneTarget
  } else {
    return target
  }
}