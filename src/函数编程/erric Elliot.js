const Indetity = (value) => ({
  map: (fn) => Indetity(fn(value)),
  valueOf: () => value,
  toString: () => `Identity(${value})`,
  *[Symbol.iterator]() {
    yield value;
  },
});

const trace = (x) => {
  console.log(x);
  return x;
};

const u = Indetity(2);
console.log(+u, u.toString(), [2, ...u]);

// u.map(x => x).map(trace)

// const f = n => n + 1
// const g = n => n * 2

// const r1 = u.map(x => f(g(x)))
// const r2 = u.map(g).map(f)

// r1.map(trace)
// r2.map(trace)
