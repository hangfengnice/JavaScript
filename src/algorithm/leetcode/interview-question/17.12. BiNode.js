var convertBiNode = function (root) {
  let head = new TreeNode();
  inorder(root, head);
  return head.right;

  function inorder(root, prev) {
    if (root) {
      prev = inorder(root.left, prev);
      root.left = null;
      prev.right = root;
      prev = root;
      prev = inorder(root.right, prev);
    }
    return prev;
  }
};
