// const res = 'a'.concat('b').concat('c')

const Sum = (x) => ({
  x,
  concat: ({ x: y }) => Sum(x + y),
  inspect: () => `Sum(${x})`,
});

const All = (x) => ({
  x,
  concat: ({ x: y }) => All(x && y),
  inspect: () => `All(${x})`,
});

const First = (x) => ({
  x,
  concat: (_) => First(x),
  inspect: () => `First(${x})`,
});

const res = Sum(1).concat(Sum(2)).inspect();
const all = All(true).concat(All(false)).inspect();
const first = First("hello").concat(First("second")).inspect();
// console.log(res);
// console.log(all);
console.log(first);
