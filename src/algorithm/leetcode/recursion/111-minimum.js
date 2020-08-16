function minimum(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  let ans = Number.MAX_SAFE_INTEGER;
  if (root.left) {
    ans = Math.min(dep(root.left), ans);
  }
  if (root.right) {
    ans = Math.min(dep(root.right), ans);
  }
  return ans + 1;
}
