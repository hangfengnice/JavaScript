const { compose } = require("ramda");

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

const Box = f => ({
  map: g => Box(compose(f, g)),
  fold: f
})

console.log(Task.of(2).map(two => two + 1));
