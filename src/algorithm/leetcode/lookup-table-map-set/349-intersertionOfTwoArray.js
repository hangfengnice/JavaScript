function intersection(nums1, nums2) {
  let s1 = new Set(nums1);
  let ret = new Set();
  for (let i = 0; i < nums2.length; i++) {
    s1.has(nums2[i]) ? ret.add(nums2[i]) : null;
  }
  return [...ret];
}
