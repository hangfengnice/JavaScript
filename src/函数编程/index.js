const { upperCase } = require("lodash");
const moment = require("moment");


function curry(fn) {
  const arity = fn.length;
  return function $curry(...args) {
    if (args.length >= arity) {
      return fn.call(null, ...args);
    }
    return $curry.bind(null, ...args);
  };
}
const match = curry((what, s) => s.match(what));
const replace = curry((re, rpl, s) => s.replace(re, rpl));
const filter = curry((f, xs) => xs.filter(f));
const map = curry((f, xs) => xs.map(f));
const split = curry((what, s) => s.split(what));
const reduce = curry((f, initial, xs) => xs.reduce(f, initial));
const toLowerCase = (s) => s.toLowerCase();
const toUpperCase = (s) => s.toUpperCase();
const intercalate = curry((str, xs) => xs.join(str));
const add = (x, y) => x + y;
const trace = curry((tag, x) => {
  // debuggerß
  console.log(tag, x);
  return x;
});
const id = (x) => x;

const compose = function (...fns) {
  return function (...args) {
    return fns.reduceRight(function (res, fn) {
      return [fn.call(null, ...res)];
    }, args)[0];
  };
};

const head = (x) => x[0];
const reverse = reduce((acc, x) => [x].concat(acc), []);

let arr = [
  {
    name: "Aston Martin One-77",
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true,
  },
  {
    name: "Aston Martin two-77",
    horsepower: 701,
    dollar_value: 1850000,
    in_stock: false,
  },
];
const prop = curry((prop, obj) => obj[prop]);

const average = (xs) => reduce(add, 0, xs) / xs.length;
const average1 = compose(average, map(prop("dollar_value")));

const sortBy = curry((fn, xs) => xs.sort((a, b) => fn(a) - fn(b)));
const last = (xs) => xs[xs.length - 1];
const flip = curry((fn, a, b) => fn(b, a));
const concat = (a, b) => a.concat(b);
const safeProp = curry((p, obj) => compose(Maybe.of, prop(p))(obj))

const append = flip(concat);
let fasterCar = compose(
  append("is the fastest"),
  prop("name"),
  last,
  sortBy(prop("horsepower"))
);

class Either {
  static of(x) {
    return new Right(x);
  }
  constructor(x) {
    this.$value = x;
  }
}
class Left extends Either {
  map(f) {
    return this;
  }

  inspect() {
    return `Left(${inspect(this.$value)})`;
  }
}
class Right extends Either {
  map(f) {
    return Either.of(f(this.$value));
  }

  inspect() {
    return `Right(${inspect(this.$value)})`;
  }
}
const left = (x) => new Left(x);

const getAge = curry((now, user) => {
  const birthDate = moment(user.birthDate, 'YYYY-MM-DD')
  return birthDate.isValid()  ? Either.of(now.diff(birthDate, 'years'))
  : left('Birth date could not be parsed');
})
// let g1 = getAge(moment(), { birthDate: '2005-12-12' })
// console.log(g1);


const fs = require('fs')
const reject = a => Task.rejected(a);
const util = {
  inspect: {
    custom: 'custom'
  }
}
class Task {
  constructor(fork) {
    this.fork = fork;
  }

  [util.inspect.custom]() {
    return 'Task(?)';
  }

  static rejected(x) {
    return new Task((reject, _) => reject(x));
  }

  // ----- Pointed (Task a)
  static of(x) {
    return new Task((_, resolve) => resolve(x));
  }

  // ----- Functor (Task a)
  map(fn) {
    return new Task((reject, resolve) => this.fork(reject, compose(resolve, fn)));
  }

  // ----- Applicative (Task a)
  ap(f) {
    return this.chain(fn => f.map(fn));
  }

  // ----- Monad (Task a)
  chain(fn) {
    return new Task((reject, resolve) => this.fork(reject, x => fn(x).fork(reject, resolve)));
  }

  join() {
    return this.chain(identity);
  }
}

const readFile = filename => new Task((reject = a => Task.rejected(a), result) => {
  fs.readFile(filename, (err, data) => (err ? reject(err) : result(data)));
});

// let ret = readFile('utils').map(split('\n')).map(head).fork();
// console.log(ret);

class IO {
  constructor(fn) {
    this.unsafePerformIO = fn;
  }

  // [util.inspect.custom]() {
  //   return 'IO(?)';
  // }

  // ----- Pointed IO
  static of(x) {
    return new IO(() => x);
  }

  // ----- Functor IO
  map(fn) {
    return new IO(compose(fn, this.unsafePerformIO));
  }

  // ----- Applicative IO
  ap(f) {
    return this.chain(fn => f.map(fn));
  }

  // ----- Monad IO
  chain(fn) {
    return this.map(fn).join();
  }

  join() {
    return new IO(() => this.unsafePerformIO().unsafePerformIO());
  }
}
const path = require('path')
const readfile = filename => new IO(() => fs.readFileSync(path.join(__dirname, filename), 'utf-8'))

const print = x => new IO(() => {
  console.log(x, 'x');
  return x
})

const cat = compose(map(print), readfile)
let ret1 = cat('utils.js').unsafePerformIO().unsafePerformIO()
console.log(ret1, 'ret1');
// let ret1 = readfile('./utils.js')
// console.log(ret1, 'ret1');
