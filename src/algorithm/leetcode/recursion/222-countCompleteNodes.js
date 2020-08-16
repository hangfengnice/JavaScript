function count(root) {
  return root ? 1 + count(root.left) + count(root.right) : 0
}
