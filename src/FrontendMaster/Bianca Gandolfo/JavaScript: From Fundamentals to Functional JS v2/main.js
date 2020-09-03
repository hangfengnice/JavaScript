let {first, second} = {first: 1, second: 2}

var suspects = [
  {
    name: 'hf',
    color: 'red'
  },
  {
    name: 'yy',
    color: "pink"
  }
]

let firstColor = suspects[0].color
let secondColor = suspects[1].color

let [s1, s2] = [suspects[0].color, suspects[1].color]

let [{color}, {color: color1}] = suspects
// console.log(color, color1);

var arr = [1, , ,2, 3]

let arr1 = arr.map(item => item + 1)
console.log(arr1);


