// var arr = ['red', 'yellow', 'green']

// for (let index of arr.keys()) {
//   console.log(index)
// }

// for (let value of arr.entries()) {
//   console.log(value);
// }


// const values = new Map([['name', 'hf'], ['age', 12]])
// for (let value of values.entries()) {
//   console.log(value);
// }


let wm = new WeakMap(), element = document.getElementById('element')
wm.set(element, 1)
console.log(wm.get(element));

