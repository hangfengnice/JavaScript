function binaryTreePaths(root) {
  if (!root) return [];
  if (root.left == null && root.right == null) return [root.val];
  let left = binaryTreePaths(root.left);
  let right = binaryTreePaths(root.right);
  return left.concat(right).map((item) => root.val + "->" + item);
}
