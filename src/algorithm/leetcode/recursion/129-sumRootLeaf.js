function sumNumbers(root, number = 0) {
  if (!root) return 0;
  else if (root.left == null && root.right == null) {
    return root.val + number;
  } else {
    number = (number + root.val) * 10;
    return sumNumbers(root.left, number) + sumNumbers(root.right, number);
  }
}
