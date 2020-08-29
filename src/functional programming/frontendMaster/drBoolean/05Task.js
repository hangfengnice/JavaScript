const { compose } = require("ramda");
const fs = require("fs");
const path = require("path");

// const Box = (f) => ({
//   map: (g) => Box(compose(f, g)),
//   fold: f,
// });

// let ret = Box((x) => 2 + x)
//   .map((two) => two + 1)
//   .fold(4);

class Task {
  constructor(fork) {
    this.fork = fork;
  }
  static rejected(x) {
    return new Task((reject, _) => reject(x));
  }
  static of(x) {
    return new Task((_, resolve) => resolve(x));
  }
  map(fn) {
    return new Task((reject, resolve) =>
      this.fork(reject, compose(resolve, fn))
    );
  }
  ap(f) {
    return this.chain((fn) => f.map(fn));
  }
  chain(fn) {
    return new Task((reject, resolve) =>
      this.fork(reject, (x) => fn(x).fork(reject, resolve))
    );
  }
  join() {
    return this.chain(identity);
  }
}

// let result = Task.of(2).map(two => two + 1)

// let result = new Task((rej, res) => res(2))
//   .chain(x => Task.of(x + 2))
//   .map((two) => two + 1)
//   .map((x) => x * 3);

// // let res = Task.of(2).map(two => two + 1)
// result.fork(console.log, console.log);

const app_ = () =>
  fs.readFile(path.join(__dirname, "config.json"), "utf-8", (err, contents) => {
    console.log(err, contents);
    if (err) throw err;

    const newContents = contents.replace(/3/g, "6");
    fs.writeFile(path.join(__dirname, "config.json"), newContents, (err, _) => {
      if (err) throw err;
      console.log("success!");
    });
  });

// app()

const readFile = (path1, enc) =>
  new Task((rej, res) =>
    fs.readFile(path.join(__dirname, path1), enc, (err, contents) =>
      err ? rej(err) : res(contents)
    )
  );

const writeFile = (path1, contents) =>
  new Task((rej, res) =>
    fs.writeFile(path.join(__dirname, path1), contents, (err, contents) =>
      err ? rej(err) : res(contents)
    )
  );

const app = () =>
  readFile("config.json", "utf-8")
    .map((contents) => contents.replace(/6/g, "3"))
    .chain((newcontents) => writeFile('config.json', newcontents));
app().fork(console.error, () => console.log("success!"));
