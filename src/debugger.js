

var numSquares = function (n) {
  let q = []
  q.push([n, 0])

  let visited = {}

  while(q.length) {
    let front = q.shift()
    let num = front[0]
    let step = front[1]

    for(let i = 1; ; i ++) {
      let a = num - i * i
      if (a < 0) break
      if (a == 0) return step + 1

      if (!visited[a]) {
        q.push([a, step + 1])
        visited[a] = true
      }
    }
  }
}

let result = numSquares(6)
console.log(result);
