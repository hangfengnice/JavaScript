var pathSum = function (root, sum) {
  let res = [];
  help(root, sum, []);
  return res;
  function help(root, sum, arr) {
    if (!root) return;
    arr.push(root.val);
    if (!root.left && !root.right && root.val == sum) {
      res.push([...arr]);
    }
    help(root.left, sum - root.val, arr);
    help(root.right, sum - root.val, arr);
    arr.pop();
  }
};
