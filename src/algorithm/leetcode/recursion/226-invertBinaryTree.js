function invertBinaryTree(root) {
  if (!root) return null;
  let left = invertBinaryTree(root.left);
  let right = invertBinaryTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}
