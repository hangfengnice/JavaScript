var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => a - b)[nums.length - k];
};

var findKthLargest1 = function (nums, k) {
  let len = nums.length;
  let left = 0;
  let right = len - 1;

  let target = len - k;
  while (true) {
    let index = partition(nums, left, right);
    if (index == target) {
      return nums[index];
    } else if (index < target) {
      left = index + 1;
    } else {
      right = index - 1;
    }
  }

  function partition(nums, l, r) {
    let povit = nums[l];
    let j = l;
    for (let i = l + 1; i <= r; i++) {
      if (nums[i] < povit) {
        j++;
        if (j != i) {
          swap(nums, j, i);
        }
      }
    }
    swap(nums, j, l);
    return j;
  }
  function swap(arr, l, r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
  }
};

var findKthLargest2 = function (nums, k) {
  let len = nums.length;
  let target = len - k;
  let left = 0;
  let right = len - 1;
  while (true) {
    let index = partition(nums, left, right);
    if (index < target) {
      left = index + 1;
    } else if (index > target) {
      right = index - 1;
    } else {
      return nums[index];
    }
  }
  function partition(nums, left, right) {
    if (right > left) {
      let randomIndex = ~~(Math.random() * (right - left + 1)) + left;
      swap(nums, left, randomIndex);
    }
    let pivot = nums[left];
    let j = left;
    for (let i = left + 1; i <= right; i++) {
      if (nums[i] < pivot) {
        j++;
        if (j != i) swap(nums, j, i);
      }
    }
    swap(nums, j, left);
    return j;
  }

  function swap(arr, l, r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
  }
};

var findKthLargest3 = function (nums, k) {
  let len = nums.length;
  let left = 0;
  let right = len - 1;
  let target = len - k;

  while (true) {
    let index = partition(nums, left, right);
    if (index == target) {
      return nums[index];
    } else if (index < target) {
      left = index + 1;
    } else {
      right = index - 1;
    }
  }
  function partition(nums, left, right) {
    if (right > left) {
      let randomIndex = ~~(Math.random() * (right - left + 1)) + left;
      swap(nums, left, randomIndex);
    }
    let povit = nums[left];

    let lt = left + 1;
    let rt = right;

    while (true) {
      while (lt <= rt && nums[lt] < povit) {
        lt++;
      }
      while (lt <= rt && nums[rt] > povit) {
        rt--;
      }
      if (lt > rt) break;
      swap(nums, lt, rt);
      lt++;
      rt--;
    }
    swap(nums, left, rt);
    return rt;
  }
  function swap(arr, l, r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
  }
};

var findKthLargest4 = function (nums, k) {
  let heap = [,],
    i = 0;
  while (i < k) {
    heap.push(nums[i++]);
  }
  buildheap(heap, k);
  for (let i = k; i < nums.length; i++) {
    if (heap[1] < nums[i]) {
      heap[1] = nums[i];
      heapify(heap, k, 1);
    }
  }
  return heap[1];

  function buildheap(arr, k) {
    if (k == 1) return;
    for (let i = Math.floor(k / 2); i >= 1; i--) {
      heapify(arr, k, i);
    }
  }
  function heapify(arr, k, i) {
    if ((k = 1)) return;
    while (true) {
      let minIndex = i;
      if (2 * i <= k && arr[2 * i] < arr[i]) {
        minIndex = 2 * i;
      }
      if (2 * i + 1 <= k && arr[2 * i + 1] < arr[minIndex]) {
        minIndex = 2 * i + 1;
      }
      if (minIndex !== i) {
        swap(arr, i, minIndex);
        i = minIndex;
      } else {
        break;
      }
    }
  }
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

let test = findKthLargest2([2, 1, 3], 1);
console.log(test);
