function symmetric(root) {
  function check(left, right) {
    if (!left && !right) return true;
    if (left && right) {
      return (
        left.val == right.val &&
        check(left.left, right.right) &&
        check(left.right, right.left)
      );
    }
    return false;
  }
  return !root || check(root.left, root.right);
}
