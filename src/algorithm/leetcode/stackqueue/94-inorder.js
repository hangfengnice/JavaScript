function inorderTraversal(root) {
  return root
    ? [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right),
      ]
    : [];
}
