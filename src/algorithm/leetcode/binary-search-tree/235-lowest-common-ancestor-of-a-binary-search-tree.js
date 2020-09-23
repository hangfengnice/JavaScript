var lowestCommonAnestor = function (root, p, q) {
  let pval = p.val;
  let qval = q.val;

  let node = root;
  while (node) {
    let parentval = node.val;
    if (pval > parentval && qval > parentval) {
      node = node.right;
    } else if (pval < parentval && qval < parentval) {
      node = node.left;
    } else {
      return node;
    }
  }
  return null;
};
