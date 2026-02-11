function newByHand(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype)
  const ret = Constructor.apply(obj, args)
  return ret !== null && (typeof ret === 'object' || typeof ret === 'function')
    ? ret
    : obj
}
