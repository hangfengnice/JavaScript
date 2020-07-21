const moment = require('moment');
const { prepend } = require('ramda');
const always = curry((a, b) => a);
const compose = (...fns) => (...args) =>
  fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

function curry(fn) {
  const arity = fn.length;
  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }
    return fn.call(null, ...args);
  };
}
const identity = (x) => x;
var add = curry((a, b) => a + b);
var chain = curry((fn, m) => m.chain(fn));
var concat = curry((a, b) => a.concat(b));
const eq = curry((a, b) => a === b);
const filter = curry((fn, xs) => xs.filter(fn));
var flip = curry((fn, a, b) => fn(b, a));
var append = flip(concat);

class Container {
  constructor(x) {
    this.$value = x;
  }
  static of(x) {
    return new Container(x);
  }
  map(f) {
    return new Container(f(this.$value));
  }
}
const prop = curry((prop, obj) => obj[prop]);

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
const match = curry((reg, str) => str.match(reg));
const safeHead = (xs) => Maybe.of(xs[0]);
const map = curry((f, xs) => xs.map(f));
const streetName = compose(map(prop("street")), safeHead, prop("addresses"));
const withdraw = curry((amount, { balance }) =>
  Maybe.of(balance >= amount ? { balance: balance - amount } : null)
);
const updateLedger = (account) => account;
const remainingBalance = ({ balance }) => `Your balance is $${balance}`;
const finishTransaction = compose(remainingBalance, updateLedger);
// const getTwenty = compose(map(finishTransaction), withdraw(20));

const maybe = curry((v, f, m) => {
  if (m.isNothing) {
    return v;
  }
  return f(m.$value);
});

const getTwenty = compose(
  maybe("You're broke!", finishTransaction),
  withdraw(20)
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
  const birthDate = moment(user.birthDate, 'YYYY-MM-DD');
  return birthDate.isValid()
    ? Either.of(now.diff(birthDate, 'years'))
    : left('Birth date could not be parsed');
});
// const trace = curry((tag, x) => {
//   console.log(tag, x);
//   return x
// })
const toString = String;
const fortune = compose(append('If you survive, you will be '), toString, add(1));
const zoltar = compose(map(console.log), map(fortune), getAge(moment()));

let ret = zoltar({ birthDate: '2005-12-12' });
// let ret1 = getAge(moment(), { birthDate: '2005-12-12' })

console.log(ret);

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
{
  fork = (_, resolve) => resolve(3)
}
map(x => x + 2)

{
  fork = (reject, resolve) => this.fork(reject, compose(resolve, x => x + 3))
}
map(x => x * 2)

