const { List } = require("immutable");

const Sum = (x) => ({
  x,
  concat: ({ x, y }) => Sum(x + y),
});

Sum.empty = () => Sum(0);

const Product = (x) => ({
  x,
  concat: ({ x, y }) => Product(x * y),
});

Product.empty = () => Product(1);

const Any = (x) => ({
  x,
  concat: ({ x: y }) => Any(x || y),
});

Any.empty = () => Any(false);

const All = (x) => ({
  x,
  concat: ({ x: y }) => All(x && y),
});

All.empty = () => All(true);

const Min = (x) => ({
  x,
  concat: ({ x: y }) => Min(x < y ? x : y),
});

Min.empty = () => Min(Infinity);

const Right = x => ({
  fold: (f, g) => g(x),
  map: f => Right(f(x)),
  concat: o => o.fold(e => Left(e), r => Right(x.concat(r)))
})

const Left = x => ({
  fold: (f, g) => f(x),
  map: f => Left(x),
  concat: o => Left(x)
})
