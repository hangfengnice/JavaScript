var values = [1, 2, 3, 4],
    colors = ['red', 'green', 'blue'],
    color='black'

  with(colors) {
    push(color)
    push(...values)
  }

  console.log(colors)

  console.log(Array.prototype[Symbol.unscopables])
