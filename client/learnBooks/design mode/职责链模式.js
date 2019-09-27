let order500 = function(orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log("500定金预购, 100优惠卷");
  } else {
    return "nextSuccess";
  }
};
let order200 = function(orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log("200定金预购, 50优惠卷");
  } else {
    return "nextSuccess";
  }
};
let orderNormal = function(orderType, pay, stock) {
  if (stock > 0) {
    console.log("normal buy, wu优惠卷");
  } else {
    console.log("no product");
  }
};
Function.prototype.after = function(fn) {
  var self = this;
  // console.log(this)
  let i = 1;
  return function() {
    console.log(self);
    console.log(this);
    var ret = self.apply(this, arguments);
    if (ret === "nextSuccess") {
      return fn.apply(this, arguments);
    }
  };
};
let order = order500.after(order200).after(orderNormal);
// console.log(order)

order(2, true, 500);
