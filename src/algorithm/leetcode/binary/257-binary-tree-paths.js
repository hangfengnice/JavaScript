var binaryTreePaths1 = function (root) {
  const paths = [];
  const construct_paths = (root, path) => {
    if (root) {
      path += String(root.val);
      if (!root.left && !root.right) {
        paths.push(path);
      } else {
        path += "->";
        construct_paths(root.left, path);
        construct_paths(root.right, path);
      }
    }
  };
  construct_paths(root, "");
  return paths;
};

var binaryTreePaths = function (root) {
  const paths = [];
  if (!root) return paths;
  const node_queue = [root];
  const path_queue = [String(root.val)];

  while (node_queue.length) {
    const node = node_queue.shift();
    const path = path_queue.shift();

    if (!node.left && !node.right) {
      paths.push(path);
    } else {
      if (node.left) {
        node_queue.push(node.left);
        path_queue.push(path + "->" + String(node.left.val));
      }
      if (node.right) {
        node_queue.push(node.right);
        path_queue.push(path + "->" + String(node.right.val));
      }
    }
  }
  return paths;
};
