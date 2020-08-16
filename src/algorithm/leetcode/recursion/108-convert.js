var sortedArrayToBST = function (nums) {
  return helper(nums, 0, nums.length - 1);
  function helper(nums, l, r) {
    if (l > r) {
      return null;
    }
    let mid = (l + r) >>> 1;
    let root = new TreeNode(nums[mid]);
    root.left = helper(nums, l, mid - 1);
    root.right = helper(nums, mid + 1, r);
    return root;
  }
};
