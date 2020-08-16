function isValidBST(root) {
  return helper(root, -Infinity, Infinity);
  function helper(root, lower, higher) {
    if (!root) return true;
    if (root.val <= lower || root.val >= higher) return false;
    return (
      helper(root.left, lower, root.val) && helper(root.right, root.val, higher)
    );
  }
}
