const { merge } = require("jquery");

function mergeSortArray(nums1, nums2) {
  let p1 = nums1.length - 1;
  let p2 = nums2.length - 1;
  let p = nums1.length + nums2.length - 1;

  while (p1 >= 0 && p2 >= 0) {
    nums1[p--] = nums1[p1] < nums2[p2] ? nums2[p2--] : nums1[p1--];
  }
  while (p2 >= 0) {
    nums1[p--] = nums2[p2--];
  }
}
