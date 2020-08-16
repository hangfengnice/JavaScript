function kthSmallest(root, k) {
  let i = 0
  let val = null
  travel(root)
  return val
  function travel(node) {
    node.left && travel(node.left)
    if (++ i == k) {
      return val = node.val
    }
    node.right && travel(node.right)
  }
}
