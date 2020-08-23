// 6 ku The Supermarket Queue
function queueTime(customers, n) {
  var w = Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}
