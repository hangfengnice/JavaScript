function binaryTraversal(root) {
  let ret = [];
  if (!root) return ret;

  let q = [];

  q.push(root);

  while (q.length) {
    let level = q.length;
    ret.unshift([]);
    for (let i = 0; i < level; i++) {
      let node = q.shift();
      ret[0].push(node.val);
      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
  }
  return ret;
}
