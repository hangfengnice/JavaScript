Function.prototype.call2 = function (context) {
  context = context || window
  context.fn = this
  let ret = context.fn(...[...arguments].slice(1))
  delete context.fn
  return ret
}

// var value = 2

// var obj = {
//   value: 1
// }

// function bar (name, age) {
//   console.log(this.value);
//   return {
//     value: this.value,
//     name,
//     age
//   }
// }

// bar.call2(null)
// console.log(bar.call2(obj, 'ha', 28));
