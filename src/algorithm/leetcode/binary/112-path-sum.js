var hasPathSum = function (root, sum) {
  if (!root) return false
  let que_node = [root]
  let que_val = [root.val]

  while(que_node.length) {
    let now = que_node.shift()
    let tmp = que_val.shift()

    if (!now.left && !now.right) {
      if (sum == tmp) return true
      continue
    }
    if (now.left) {
      que_node.push(now.left)
      que_val.push(tmp + now.left.val)
    }
    if (now.right) {
      que_node.push(now.right)
      que_val.push(tmp + now.right.val)
    }
  }
  return false

}
