// maximum-depth-of-binary-tree

var maxDepth = function maxDepth(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

var maxDepth1 = function (root) {
  if (!root) return 0;
  let queue = [];
  queue.push(root);
  let ans = 0;

  while (queue.length) {
    let size = queue.length;
    while (size) {
      let node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      size--;
    }
    ans++;
  }
  return ans;
};
