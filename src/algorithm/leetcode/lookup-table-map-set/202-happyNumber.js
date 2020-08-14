function happyNumber(n) {
  let seens = new Set();
  while (n != 1 && !seens.has(n)) {
    seens.add(n);
    n = getNext(n);
  }
  return n == 1;
}
function getNext(n) {
  let total = 0;
  while (n > 0) {
    let d = n % 10;
    n = Math.floor(n / 10);
    total += d * d;
  }
  return total;
}
