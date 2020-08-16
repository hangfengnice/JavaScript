function pathSum(root, sum) {
  let res = []
  help(root, sum, res, [])
  return res
  function help(root, sum, res, arr) {
    if (!root) return
    arr.push(root.val)
    if (root.left == null && root.right == null && root.val == sum) {
      res.push([...arr])
    }
    help(root.left, sum - root.val, res, arr)
    help(root.right, sum - root.val, res, arr)
    arr.pop()
  }
}
