function thirdFunction(time) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject('收敛一些' )
      })
  })
}

Promise.resolve(true).then((resolve, reject) => {
  return thirdFunction().then(() => {
      return thirdFunction()
  }).then(() => {
      return thirdFunction()
  }).then(() => {
  })
}).catch(error => {
  console.log('捕获异常', error)
})
