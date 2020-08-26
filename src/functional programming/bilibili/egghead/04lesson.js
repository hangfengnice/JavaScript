const Right = (x) => ({
  chain: (f) => f(x),
  map: (f) => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`,
});

const Left = (x) => ({
  chain: (f) => Left(x),
  map: (f) => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`,
});

const fromNullable = (x) => (x != null ? Right(x) : Left(null));

const fs = require("fs");
const path = require("path");

const tryCatch = (f) => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};

// const getProt = () => {
//   try {
//     const str = fs.readFileSync(path.join(__dirname, 'config.json'))

//     const config = JSON.parse(str)
//     return config.port
//   } catch (e) {
//     console.log(e);
//     return 3000
//   }
// }

const getProt = () =>
  tryCatch(() => fs.readFileSync(path.join(__dirname, "config.json")))
    .chain((c) => tryCatch(() => JSON.parse(c)))
    .fold(
      (x) => 3000,
      (x) => x.port
    );

// {
//   try {
//     const str = fs.readFileSync(path.join(__dirname, 'config.json'))

//     const config = JSON.parse(str)
//     return config.port
//   } catch (e) {
//     console.log(e);
//     return 3000
//   }
// }

let result = getProt();
console.log(result);
