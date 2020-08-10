const { call } = require("ramda")

function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b)
  }, 100)
}

async function sum(...rest) {
  let result = rest.shift()
  for(let num of rest) {
    result = await new Promise(resolve => {
      asyncAdd(result, num, (_, res) => {
        resolve(res)
      })
    })
  }
  return result
}

let start = Date.now()
sum(1, 2, 3, 4, 5, 6).then(res => {
  // 请保证在调用sum方法之后，返回结果21
  console.log(res)
  console.log(`程序执行共耗时: ${Date.now() - start}`)
})
