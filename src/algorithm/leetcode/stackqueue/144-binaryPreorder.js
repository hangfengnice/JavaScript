function preorderTraversal(root) {
  return root
    ? [
        root.val,
        ...preorderTraversal(root.left),
        ...preorderTraversal(root.right),
      ]
    : [];
}

function stackTraversal(root) {
  if (!root) return null;
  let s = [],
    res = [];
  s.push(root);
  while (s.length) {
    let temp = s.pop();
    if (temp.val) {
      res.push(temp.val);
    }
    temp.right && s.push(temp.right);
    temp.left && s.push(temp.left);
  }
  return res;
}
