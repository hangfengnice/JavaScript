function binarySearch(root) {
  let ret = [];
  if (!root) return ret;

  let q = [],
    odd = 1;
  q.push(root);
  while (q.length) {
    let level = q.length;
    ret.push([]);
    for (let i = 0; i < level; i++) {
      let node = q.shift();
      if (odd % 2) {
        ret[ret.length - 1].push(node.val);
      } else {
        ret[ret.length - 1].unshift(node.val);
      }

      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
    odd++;
  }
  return ret;
}
