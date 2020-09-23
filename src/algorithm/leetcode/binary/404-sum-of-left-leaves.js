var sumOfLeftLeaves1 = function (root) {
  if (!root) return 0;
  let { left, right } = root;
  if (left && !left.left && !left.right) {
    return left.val + sumOfLeftLeaves(right);
  }
  return sumOfLeftLeaves(left) + sumOfLeftLeaves(right);
};

var sumOfLeftLeaves = function (root) {
  if (!root) return 0;
  let sum = 0;
  const queue = [root];
  while (queue.length) {
    const cur = queue.shift();
    if (cur.left) {
      if (!cur.left.left && !cur.left.right) {
        sum += cur.left.val;
      } else {
        queue.push(cur.left);
      }
    }
    if (cur.right) {
      queue.push(cur.right);
    }
  }
  return sum;
};
