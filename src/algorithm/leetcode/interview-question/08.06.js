const { move } = require("ramda");

var hanota = function (A, B, C) {
  let n = A.length;
  move(n, A, B, C);

  function move(m, a, b, c) {
    if (m == 1) {
      c.push(a.pop());
    } else {
      move(m - 1, a, c, b);
      c.push(a.pop());
      move(m - 1, b, a, c);
    }
  }
};
