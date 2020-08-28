const {compose} = require('ramda')

const Box = f => ({
  map: g => Box(compose(f, g)),
  fold: f
})

let ret = Box((x) => 2 + x).map(two => two + 1).fold(4)
console.log(ret);
