function perfectSquare(n) {
  let sqr = Math.sqrt(n);
  let neighbor = [];
  let queue = new Set([0]);
  for (let i = 1; i <= sqr; i++) {
    neighbor.push(i * i);
  }
  let count = 0;
  while (queue.size) {
    let nextSet = new Set();
    count++;

    for (let v of queue) {
      for (let c of neighbor) {
        let add = v + c;
        if (add == n) {
          return count;
        }
        if (add > n) break;
        nextSet.add(add);
      }
    }
    queue = nextSet;
  }
  return count;
}

var numSquares = function (n) {
  let q = [];
  q.push([n, 0]);
  let visited = {};

  while (q.length) {
    let front = q.shift();
    let num = front[0];
    let step = front[1];

    for (let i = 1; ; i++) {
      let a = num - i * i;
      if (a < 0) break;
      if (a == 0) return step + 1;

      if (!visited[a]) {
        q.push([a, step + 1]);
        visited[a] = true;
      }
    }
  }
};
