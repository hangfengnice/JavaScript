Function.prototype.bind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw Error('need function')
  }
  let self = this
  var fbound = function () {
    self.apply(this instanceof fbound ? this : context, args.concat(...arguments))
  }
  fbound.prototype = Object.create(this.prototype)
  return fbound
}