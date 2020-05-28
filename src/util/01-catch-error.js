// function fetch (callback) {
//   setTimeout(() => {
//     throw Error('请求失败')
//   });
// }
// try {
//   fetch(() => console.log('请求处理'))
// } catch (e) {
//   console.log(e);
// }
// const promise = new Promise(function () {
//   // resolve(1)
// })
// promise.then(() => {
//   console.log('ok');
// }, () => {
//   console.log('reject');
// })

// Promise.resolve(true).then(() => {
//   throw Error('microtask 中的异常')
// }).catch(err => {
//   console.log(err);
// })

const timeout = (time = 0) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(time + 200)
  }, time)
})

function* main() {
  const result1 = yield timeout(200)
  console.log(result1);
  const result2 = yield timeout(result1)
  console.log(result2);
  const result3 = yield timeout(result2)
  console.log(result3);
}
function step (generator) {
  const gen = generator()
  let lastValue
  return () => Promise.resolve(gen.next(lastValue).value).then(value => {
    lastValue = value
    return lastValue
  })
}

const run = step(main)
// function
