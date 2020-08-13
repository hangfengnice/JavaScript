function findKthLargest(nums, k) {
  return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}
function quickSelect(a, l, r, index) {
  let q = randomPartition(a, l, r);
  if (q == index) {
    return a[q];
  } else {
    return q < index
      ? quickSelect(a, q + 1, r, index)
      : quickSelect(a, l, q - 1, index);
  }
}

function randomPartition(a, l, r) {
  return partition(a, l, r);
}

function partition(arr, l, r) {
  let x = arr[r],
    i = l - 1;
  for (let j = l; j < r; j++) {
    if (arr[j] <= x) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  i++;
  [arr[i], arr[r]] = [arr[r], arr[i]];
  return i;
}

let ret = findKthLargest([1, 4, 2, 5, 2], 2);
console.log(ret);


function findKth(arr, k) {
    let heapsize = arr.length
    buildMaxHeap(arr, heapsize)

}

function buildMaxHeap(a, heapsize) {
  for(let i = Math.floor(heapsize / 2); i >= 0; i --) {
    maxHeapify(a, i, heapsize)
  }
}
