Function.prototype.bind1 = function(context) {
  if (typeof this != "function") {
    throw new TypeError("Error");
  }
  let self = this;
  let args = [].slice.call(arguments, 1);
  return function F() {
    if (this instanceof F) {
      return new self(...args, ...arguments);
    } else {
      self.apply(context, args.contact(...arguments));
    }
  };
};

// 法2
Function.prototype.bind2 = function (context) {
  if (typeof this != "function") {
    throw TypeError('Error')
  }
  let self = this
  let args = [].slice.call(arguments, 1)

  function F () {
    return self.apply(this instanceof F ? this : context, args.contact(...arguments)) 
  }
  F.prototype = Object.create(this.prototype)
  return F
}
