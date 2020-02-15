Function.prototype.call1 = function(context) {
  context = context || window;
  context.fn = this;
  // let args = [].slice.call(arguments, 1);
  let ret = context.fn(...[].slice.call(arguments, 1));
  delete context.fn;
  return ret;
};

let value = 1;

let obj = {
  value: 2
};

function test(a, b) {
  console.log(a, b);
  console.log(this.value, a + b);
}

test.call1(obj, 1, 2);
