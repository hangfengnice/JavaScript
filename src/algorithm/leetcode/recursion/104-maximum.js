function maximum(root) {
  if (!root) return 0
  return Math.max(maximum(root.left), maximum(root.right)) + 1
}
