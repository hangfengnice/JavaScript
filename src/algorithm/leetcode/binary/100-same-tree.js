var isSameTree = function (p, q) {
  const queue = [{ p, q }];
  while (queue.length) {
    const cur = queue.shift();

    if (!cur.p && !cur.q) continue;
    if (!cur.p || !cur.q || cur.p.val != cur.q.val) return false;
    queue.push(
      { p: cur.p.left, q: cur.q.left },
      { p: cur.p.right, q: cur.q.right }
    );
  }
  return true;
};
