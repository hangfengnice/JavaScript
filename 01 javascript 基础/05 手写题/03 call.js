Function.prototype.myCall = function (context, ...args) {
  context = context || window;
  let fn = Symbol("fn");
  context[fn] = this;
  let res = context[fn](...args);
  delete context[fn];
  return res;
};

let obj = {
  name: 'hangfeng'
}

function say() {
  console.log(this.name);
}
say.call(obj)
