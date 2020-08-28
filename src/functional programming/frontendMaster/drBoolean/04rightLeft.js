const Right = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  toString:  `Right(${x})`
})

const Left = x => ({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (f, g) => f(x),
  toString:  `Left(${x})`
})

const fromNullAble = x => x != null ? Right(x) : Left('missing')

const findColor = name => {
  const found = {red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name]
  return found ? Right(found) : Left('dunno')
}
let res = findColor('red').fold(x => x, x => x)
console.log(res);
