var merge = function (nums1, m, nums2, n) {
  let l = m - 1;
  let r = n - 1;
  let all = m + n - 1;

  while (l >= 0 && r >= 0) {
    if (nums1[l] < nums2[r]) {
      nums1[all--] = nums2[r--];
    } else {
      nums1[all--] = nums1[l--];
    }
  }
  while (r >= 0) {
    nums1[all--] = nums2[r--];
  }
};
