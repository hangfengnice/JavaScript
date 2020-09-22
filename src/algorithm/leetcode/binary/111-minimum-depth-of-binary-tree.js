var minDepth = function minDepth(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  let min_depth = Number.MAX_SAFE_INTEGER;

  if (root.left) {
    min_depth = Math.min(minDepth(root.left), min_depth);
  }
  if (root.right) {
    min_depth = Math.min(minDepth(root.right), min_depth);
  }
  return min_depth + 1;
};

// bfc
var minDepth1 = function (root) {
  if (!root) return 0;
  let queue = [];
  queue.push([root, 1]);

  while (queue.length) {
    let first = queue.shift();

    let node = first[0];
    let depth = first[1];

    if (!node.left && !node.right) return depth;

    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }
};
// bfc 优化一点
var minDepth2 = function (root) {
  if (!root) return 0;
  let queue = [[root, 1]];
  while (queue.length) {
    let f = queue.shift();
    let n = f[0];
    let depth = f[1];

    if (!n.left && !n.right) return depth;

    n.left && queue.push([n.left, depth + 1]);
    n.right && queue.push([n.right, depth + 1]);
  }
};
