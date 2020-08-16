function deleteNode(root, key) {
  if (!root) return root;
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left && !root.right) {
      root = null;
    } else if (!root.left && root.right) {
      root = root.right;
    } else if (root.left && !root.right) {
      root = root.left;
    } else {
      let last = root.left;
      while (last.right) {
        last = last.right;
      }
      root.val = last.val;
      root.left = deleteNode(root.left, last.val);
    }
  }
  return root;
}
