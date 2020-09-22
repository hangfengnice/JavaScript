var isSymmetric = function (root) {
  return !root || check(root.left, root.right);
  function check(l, r) {
    if (!l && !r) return true;
    if (l && r) {
      return l.val == r.val && check(l.left, r.right) && check(l.right, r.left);
    }
    return false;
  }
};
