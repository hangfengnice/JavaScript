const Box = (x) => ({
  map: (f) => Box(f(x)),
  fold: (f) => f(x),
  toString: `Box(${x})`,
});

const nextCharFourNumberString = (str) =>
  Box(str)
    .map((x) => x.trim())
    .map((t) => parseInt(t, 10))
    .map(number => new Number(number + 1))
    .fold(String.fromCharCode)

let res = nextCharFourNumberString(' 64 ')
console.log(res);
