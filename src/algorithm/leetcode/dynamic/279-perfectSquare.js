var numSquares = function (n) {
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
};
var numSquares = function (n) {
  const dp = Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    dp[i] = i;
    for (let j = 1; i - j * j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
};
