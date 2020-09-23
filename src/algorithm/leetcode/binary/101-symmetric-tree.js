var isSymmetric = function (root) {
  return !root || check(root.left, root.right);
  function check(l, r) {
    if (!l && !r) return true;
    if (l && r) {
      return l.val == r.val && check(l.left, r.right) && check(l.right, r.left);
    }
    return false;
  }
};

// bfc
const isSymmetric1 = function (root) {
  if (!root) return true;
  const queue = [root.left, root.right];
  while (queue.length) {
    const leveSize = queue.length;
    for (let i = 0; i < leveSize; i += 2) {
      const left = queue.shift();
      const right = queue.shift();
      if (left && right) {
        if (left.val != right.val) return false;
        queue.push(left.left, right.right);
        queue.push(left.right, right.left);
      }

      if ((!left && right) || (!right && left)) {
        return false;
      }
    }
  }
  return true;
};

var isSymmetric2 = function (root) {
  if (!root) return true;
  let leftStack = [],
    rightStack = [];
  let curLeft = root.left;
  let curRight = root.right;
  while (curLeft || curRight || leftStack.length || rightStack.length) {
    while (curLeft) {
      leftStack.push(curLeft);
      curLeft = curLeft.left;
    }
    while (curRight) {
      rightStack.push(curRight);
      curRight = curRight.right;
    }
    if (leftStack.length != rightStack.length) return false;

    curLeft = leftStack.pop();
    curRight = rightStack.pop();
    if (curLeft.val != curRight.val) return false;
    curLeft = curLeft.right;
    curRight = curRight.left;
  }
  return true;
};
