function pathSum(root, sum) {
  if (root == null) return 0;
  let res = findPath(root, sum);
  res += pathSum(root.left, sum);
  res += pathSum(root.right, sum);
  return res;

  function findPath(node, num) {
    if (node == null) return 0;
    let res = 0;
    if (node.val == num) {
      res += 1;
    }
    res += findPath(node.left, num - node.val);
    res += findPath(node.right, num - node.val);
    return res;
  }
}
