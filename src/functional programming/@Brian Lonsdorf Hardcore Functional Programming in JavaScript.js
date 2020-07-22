const moment = require("moment");

var memoize = (f) => {
  const cache = {};
  return (...args) => {
    const argsStr = JSON.stringify(args);
    return cache[argsStr] || (cache[argsStr] = f.apply(this, args));
  };
};

function curry(fn) {
  const arity = fn.length;

  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }

    return fn.call(null, ...args);
  };
}
const match = curry((what, s) => s.match(what));
const replace = curry((what, replacement, s) => s.replace(what, replacement));
const filter = curry((f, xs) => xs.filter(f));
const map = curry((f, xs) => xs.map(f));

const compose = (...fns) => (...args) =>
  fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

const toUpperCase = (x) => x.toUpperCase();
const exclaim = (x) => `${x}!`;
const shout = compose(exclaim, toUpperCase);
const reduce = curry((fn, zero, xs) => xs.reduce(fn, zero));
const head = (x) => x[0];
const reverse = reduce((acc, x) => [x].concat(acc), []);
const last = compose(head, reverse);
const lastUpper = compose(toUpperCase, head, reverse);
const loudLastUpper = compose(exclaim, toUpperCase, head, reverse);
const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});
const id = (x) => x;
const prop = curry((prop, obj) => obj[prop]);

class Container {
  constructor(x) {
    this.$value = x;
  }

  static of(x) {
    return new Container(x);
  }
  map(f) {
    return Container.of(f(this.$value));
  }
}
class Maybe {
  static of(x) {
    return new Maybe(x);
  }

  get isNothing() {
    return this.$value == null;
  }

  constructor(x) {
    this.$value = x;
  }

  map(fn) {
    return this.isNothing ? this : Maybe.of(fn(this.$value));
  }

  inspect() {
    return this.isNothing ? "Nothing" : `Just(${inspect(this.$value)})`;
  }
}
const safeHead = (xs) => Maybe.of(xs[0]);
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



class Task {
  constructor(fork) {
    this.fork = fork;
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
    return new Task((reject, resolve) =>
      this.fork(reject, compose(resolve, fn))
    );
  }

  // ----- Applicative (Task a)
  ap(f) {
    return this.chain((fn) => f.map(fn));
  }

  // ----- Monad (Task a)
  chain(fn) {
    return new Task((reject, resolve) =>
      this.fork(reject, (x) => fn(x).fork(reject, resolve))
    );
  }

  join() {
    return this.chain(identity);
  }
}

const fs = require('fs')
const path = require('path')
// const jquery = require('jquery')
// console.log(jquery);
const split = curry((reg, str) => str.split(reg))

// const readFile = filename => new Task((reject, result) => {
//   fs.readFile(path.join(__dirname, filename), 'utf-8', (err, data) => (err ? reject(err) : result(data)));
// });

// const getJSON = curry((url, params) => new Task((reject, result) => {
//   jquery.getJSON(url, params, result).fail(reject);
// }));

// // console.log($.getJSON);
// console.log(getJSON('1', {}).fork(console.log, console.log));
class Compose {
  constructor(fgx) {
    this.getCompose = fgx;
  }

  static of(fgx) {
    return new Compose(fgx);
  }

  map(fn) {
    return new Compose(map(map(fn), this.getCompose));
  }
}
class IO {
  constructor(fn) {
    this.unsafePerformIO = fn;
  }
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
const readFile = filename => new IO(() => fs.readFileSync(path.join(__dirname, filename), 'utf-8'));

const print = x => new IO(() => {
  console.log(x);
  return x;
});
const cat = compose(map(print), readFile);
let ret = cat('config.txt');
console.log(typeof ret.unsafePerformIO());
