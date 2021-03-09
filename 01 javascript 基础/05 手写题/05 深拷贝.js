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

const mapTag = '[object Map]';
const setTag = '[object Set]';
const boolTag = '[object Boolean]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const dateTag = '[object Date]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

const handleRegExp = (target) => {
  const {source, flags} = target
  return new target.constructor(source, flags)
}

const handleFunc = (func) => {
  if (!func.prototype) return func
  const bodyReg = /(?<={)(.|\n)+(?=})/m
  const paramReg = /(?<=\().+(?=\)\s+{)/

  const funcStr = func.toString()

  let param = paramReg.exec(funcStr)
  const body = bodyReg.exec(funcStr)

  console.log(param, body)
  if (!body)return null
  if (param) {
    param = param[0].split(',')
    return new Function (...param, body[0])
  } else {
    return new Function (body[0])
  }

}

const handleNotTraverse = (target, tag) => {
  const Ctor = target.constructor
  switch (tag) {
    case boolTag:
      return new Object(Boolean.prototype.valueOf.call(target))
    case numberTag:
      return new Object(Number.prototype.valueOf.call(target))
    case stringTag:
      return new Object(String.prototype.valueOf.call(target))
    case errorTag:
    case dateTag:
      return new Ctor(target)
    case regexpTag:
      return handleRegExp(target)
    case funcTag:
      return handleFunc(target)
    default:
      return new Ctor(target)
  }
}

const deepClone = (target, map = new Map()) => {
  if (map.get(target)) {
    return target
  }

  let type = getType(target)

  let cloneTarget

  if (!canTraverse(type)) {
    return handleNotTraverse(target, type)
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

  if (type == setTag) {
    target.forEach(item => {
      cloneTarget.add(deepClone(item))
    })
  }

  if (prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = deepClone(target[prop])
    }
  }
  return cloneTarget
}



