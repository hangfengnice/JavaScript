const fs = require("fs");
const path = require("path");
const { curry, compose } = require("ramda");

const Box = (x) => ({
  map: (f) => Box(f(x)),
  fold: (f) => f(x),
  toString: `Box(${x})`,
});

const first = (xs) => xs[0];

const halfTheFirstLargeNumber_ = (xs) => {
  const found = xs.filter((x) => x >= 20);
  const answer = first(found) / 2;
  return `The answer is ${answer}`;
};

// const compose = (f, g) => x => Box(x).map(g).fold(f)
const halfTheFirstLargeNumber = (xs) =>
  Box(xs)
    .map((xs) => xs.filter((x) => x >= 20))
    .map((found) => first(found) / 2)
    .fold((answer) => `The answer is ${answer}`);

// const Right = x => ({
//   chain: f => f(x),
//   map: f => Right(f(x)),
//   fold: (f, g) => g(x),
//   toString: `Right(${x})`
// })

// const Left = x => ({
//   chain: f => Left(x),
//   map: f => Left(x),
//   fold: (f, g) => f(x),
//   toString: `Left(${x})`
// })
// const result = halfTheFirstLargeNumber([1, 4, 50])
// console.log(result);

// const nextCharForNumberString_ = (str) => {
//   const trimmed = str.trim();
//   const number = parseInt(trimmed);
//   const nextNumber = new Number(number + 1);
//   return String.fromCharCode(nextNumber);
// };

// const nextCharForNumberString = (str) =>
//   Box(str)
//   .map(x => x.trim())
//   .map(trimmed => parseInt(trimmed, 10))
//   .map(number => new Number(number + 1))
//   .fold(String.fromCharCode)

// const result = nextCharForNumberString('  64')

// console.log(result);
const Right = (x) => ({
  chain: (f) => f(x),
  map: (f) => Right(f(x)),
  fold: (f, g) => g(x),
  toString: `Right(${x})`,
});
const Left = (x) => ({
  chain: (f) => Left(x),
  map: (f) => Left(x),
  fold: (f, g) => f(x),
  toString: `Left(${x})`,
});

const findColor = (name) =>
  ({ red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }[name]);

const res = findColor("red");
// console.log(res);

function mergeSort(arr) {
  l;
}
