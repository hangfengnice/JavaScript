var sortArry = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;

  function quickSort(nums, left, right) {
    if (left >= right) {
      return;
    }
    let pivot = partition(nums, left, right);
    quickSort(nums, left, pivot - 1);
    quickSort(nums, pivot + 1, right);
  }

  function partition(nums, left, right) {
    let povit = nums[left];

    let j = left;
    for (let i = left + 1; i <= right; i++) {
      if (nums[i] < povit) {
        j++;
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
    nums[left] = nums[j];
    nums[j] = povit;
    return j;
  }
};


let res = sortArry([1, 3, 2, 7, 6, 5])

console.log(res, 'res')