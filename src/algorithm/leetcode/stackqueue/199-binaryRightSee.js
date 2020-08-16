function binarySearch(root) {
  let ret = []
  if (!root) return root
  let q = []
  q.push(root)
  while(q.length) {
    let level = q.length
    ret.push([])
    for(let i = 0; i < level; i ++) {
      let node = q.shift()
      ret[ret.length - 1].push(node.val)
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
  }
  return ret.map(item => item.pop())
}
