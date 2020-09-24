// 排序
var minDiffInBST = function (root) {
  let arr = [];
  dfs(root);
  let ans = Number.MAX_SAFE_INTEGER;

  // for (let i = 0; i < arr.length - 1; i++) {
  //   ans = Math.min(arr[i + 1] - arr[i], ans);
  // }

  arr.reduce((acc, cur) => {
    ans = Math.min(cur - acc, ans);
    return cur;
  });

  return ans;
  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    arr.push(root.val);
    dfs(root.right);
  }
};

// 在中序遍历的时候 就进行比较
var minDiffInBST = function (root) {
  let prev = null;
  let ans = Number.MAX_SAFE_INTEGER;
  dfs(root);
  return ans;

  function dfs(root) {
    if (!root) return;
    dfs(root.left);
    if (prev != null) {
      ans = Math.min(ans, root.val - prev);
    }
    prev = root.val;
    dfs(root.right);
  }
};
