var pathSum = function (root, sum) {
  if (!root) return 0;
  let res = findPath(root, sum);
  res += pathSum(root.left, sum);
  res += pathSum(root.right, sum);
  return res;

  function findPath(root, sum) {
    if (!root) return 0;
    let res = 0;
    if (root.val == sum) {
      res += 1;
    }
    res += findPath(root.left, sum - root.val);
    res += findPath(root.right, sum - root.val);
    return res;
  }
};
