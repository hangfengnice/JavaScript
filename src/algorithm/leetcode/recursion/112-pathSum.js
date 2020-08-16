var hasPathSum = function (root, sum) {
  if (!root) return false;
  if (root.left == null && root.right == null) return sum == root.val;
  if (hasPathSum(root.left, sum - root.val)) {
    return true;
  }
  if (hasPathSum(root.right, sum - root.val)) {
    return true;
  }
  return false;
};
