let p = new Promise((resolve) => {
  resolve(4)
})

let p2 = p.then((val) => {
  console.log(val);

})

p2.then((val) => console.log(val))