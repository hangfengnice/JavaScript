const Sum = (x) => ({
  x,
  concat: ({ x: y }) => Sum(x + y),
  inspect: () => `Sum(${x})`,
});

Sum.empty = () => Sum(0);

const ret = Sum.empty().concat(Sum(1).concat(Sum(2)));
// console.log(ret);

const All = (x) => ({
  x,
  concat: ({ x: y }) => All(x && y),
  inspect: () => `All(${x})`,
});

All.empty = () => All(true);

const ret1 = All.empty().concat(All(true).concat(All(false)));
// console.log(ret1);

const First = (x) => ({
  x,
  concat: (_) => First(x),
  inspect: () => `First(${x})`,
});

// const ret2 =

const sum = (xs) => xs.reduce((acc, x) => acc + x, 0);
const all = (xs) => xs.reduce((acc, x) => acc && x, true);
const first = (xs) => xs.reduce((acc, x) => acc);
console.log(first([1, 3, 4]));
