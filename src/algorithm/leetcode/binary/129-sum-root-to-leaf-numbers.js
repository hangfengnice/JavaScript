var sumNumbers1 = function (root, sum = 0) {
  if (!root) return 0;
  else if (!root.left && !root.right) {
    return root.val + sum;
  } else {
    sum = (root.val + sum) * 10;
    return sumNumbers(root.left, sum) + sumNumbers(root.right, sum);
  }
};

var sumNumbers = function (root) {
  if (!root) return 0;
  const nodes = [[root, root.val]];
  const res = [];

  while (nodes.length) {
    const [node, number] = nodes.shift();

    if (!node.left && !node.right) res.push(number);

    node.left && nodes.push([node.left, 10 * number + node.left.val]);
    node.right && nodes.push([node.right, 10 * number + node.right.val]);
  }
  return res.reduce((acc, cur) => acc + cur);
};
