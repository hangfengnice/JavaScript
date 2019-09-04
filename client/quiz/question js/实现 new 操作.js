function NEW(func) {
  let res = {}
  if(func.prototype !==null) {
    res.__proto__ = func.prototype
  }
  let args = [].slice.call(arguments, 1)
  let ret = func.apply(res, args)
  return (typeof(ret) === 'object' || typeof(ret) === 'function') ? ret : res
}
