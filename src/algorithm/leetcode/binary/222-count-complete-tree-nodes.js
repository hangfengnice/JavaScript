var countNodes = function (root) {
  return root ? 1 + countNodes(root.left) + countNodes(root.right) : 0;
};

// [1, 2]
var countNodes1 = function (root) {
  if (!root) return true;

  let left = height(root.left);
  let right = height(root.right);

  if (left == right) {
    return countNodes1(root.right) + (1 << left);
  } else {
    return countNodes1(root.left) + (1 << right);
  }

  function height(root) {
    return root ? 1 + height(root.left) : 0;
  }
};
