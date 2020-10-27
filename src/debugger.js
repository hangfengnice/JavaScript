function *gen(val) {
  val = yield val * 2
  yield val
}

let g = gen(2)

let a1 = g.next(3).value;
let a2 = g.next(5).value;

console.log(a1, a2);
