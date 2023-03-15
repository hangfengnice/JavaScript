var data = { name: 'hf' }
function test(data) {
  let a = new Function('data', 'console.log(data.name)')

  a(data)
}

test({ name: '11' })
