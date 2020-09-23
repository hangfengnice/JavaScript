var rangeSumBST = function (root, L, R) {
  var res = 0;
  dfs(root, L, R);
  return res;
  function dfs(root, L, R) {
    if (root) {
      if (root.val >= L && root.val <= R) {
        res += root.val;
      }
      if (root.val > L) {
        dfs(root.left, L, R);
      }
      if (root.val < R) {
        dfs(root.right, L, R);
      }
    }
  }
};

// 迭代
var rangeSumBST = function (root, L, R) {
  let ans = 0;
  let stack = [root];
  while (stack.length) {
    let node = stack.shift();

    if (node) {
      if (L <= node.val && node.val <= R) {
        ans += node.val;
      }
      if (L < node.val) {
        stack.push(node.left);
      }
      if (node.val < R) {
        stack.push(node.right);
      }
    }
  }
  return ans;
};
