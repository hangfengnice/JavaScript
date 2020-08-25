const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
})

const moneyToFloat = str => parseFloat(str.replace(/\$/g, ''))
const moneyToFloat = str =>
  Box(str)
  .map(s => s.replace(/\$/g, ''))
  .fold(r => parseFloat(r))


// const Right = x => ({
//   map: f =>
// })
