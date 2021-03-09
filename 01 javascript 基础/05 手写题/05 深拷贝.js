const isObject = (target) =>
  (typeof target == "object" || typeof target == "function") && target !== null;

const getType = target => Object.prototype.toString.call(target)

const canTraverse = {
  '[object Map]': true,
  '[object Set]': true,
  '[object Array]': true,
  '[object Object]': true,
  '[object Arguments]': true,
};


const deepClone = (target, map = new Map()) => {
  if (map.get(target)) {
    return target
  }

  let type = getType(target)

  let cloneTarget

  if (!canTraverse(type)) {
    return 
  } else {
    let ctor = target.constructor
    cloneTarget = new ctor
  }

  if (map.get(target)) {
    return target
  }
  map.set(target, true)

  if (type == mapTag) {
    target.forEach((item, key) => {
      cloneTarget.set(deepClone(key), deepClone(item))
    })
  }

  // if (isObject(target)) {
  //   map.set(target, true)
  //   const cloneTarget = Array.isArray(target) ? [] : {}
  //   for(let prop in target) {
  //     if (target.hasOwnProperty(prop)) {
  //       cloneTarget[prop] = deepClone(target[prop])
  //     }
  //   }
  //   return cloneTarget
  // } else {
  //   return target
  // }
}

let map = new Map([['a', 'b']])
map.forEach((item, key) => {
  console.log(item, key);
})