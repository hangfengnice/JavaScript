var isBalanced1 = function (root) {
  if (!root) return true;
  else
    return (
      Math.abs(height(root.left) - height(root.right)) <= 1 &&
      isBalanced(root.left) &&
      isBalanced(root.right)
    );
  function height(root) {
    return root ? 1 + Math.max(height(root.left), height(root.right)) : 0;
  }
};

var isBalanced = function (root) {
  return height(root) >= 0;
  function height(root) {
    if (!root) return 0;
    let leftHeight = height(root.left);
    let rightHeight = height(root.right);
    if (
      leftHeight == -1 ||
      rightHeight == -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    } else {
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }
};
