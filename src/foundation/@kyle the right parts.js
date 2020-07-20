

let yd = { x: 1, y: 2 };
// 以下两段代码会抛出异常吗？
let ydWithXGetter1 = {
  ...yd,
  get x() {
    throw new Error();
  },
};

// let ydWithXGetter2 = {
//   ...yd,
//   ...{
//     get x() {
//       throw new Error();
//     },
//   },
// };

let ydObject = { ...null, ...undefined };
console.log(ydObject);
// let ydArray = [...null, ...undefined];
// console.log(ydArray);

