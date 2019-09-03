Function.prototype.bind = function (context) {
  if(!typeof this === 'function') {
    throw Error('not a function')
  }
  let self = this
  let args = [].slice.call(arguments, 1)
  return function F() {
    return (this instanceof F) ? new self(...args, ...argumnets) : self.call(context, ...args, ...arguments)
  } 
}
