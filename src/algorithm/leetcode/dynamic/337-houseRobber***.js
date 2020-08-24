var rob = function (root) {
  const dfs = node => {
    if (node == null) {
      return [0, 0]
    }
    const l = dfs(node.left)
    const r = dfs(node.right)
    const select = node.val + l[1] + r[1]
    const noselect = Math.max(l[0], l[1]) + Math.max(r[0], r[1]);
    return [select, noselect]
  }
  let rootret = dfs(root)
  return Math.max(rootret[0], rootret[1])
}
