var longestUnivaluePath = function (root) {
  let ans = 0;
  arrowLength(root);
  return ans;
  function arrowLength(node) {
    if (!node) return 0;
    let left = arrowLength(node.left);
    let right = arrowLength(node.right);

    let arrowLeft = 0,
      arrowRight = 0;

    node.left && node.left.val == node.val && (arrowLeft = left + 1);
    node.right && node.right.val == node.val && (arrowRight = right + 1);

    ans = Math.max(ans, arrowLeft + arrowRight);

    return Math.max(arrowLeft, arrowRight);
  }
};
