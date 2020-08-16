var sumOfLeftLeaves = function (root) {
  if (!root) return 0;
  let { left, right } = root;
  if (left && !left.left && !left.right) {
    return left.val + sumOfLeftLeaves(right);
  }
  return sumOfLeftLeaves(left) + sumOfLeftLeaves(right);
};
