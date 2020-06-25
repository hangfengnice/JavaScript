const {
  swap,
  generateRandomArray,
  generateNearlyOrderedArray,
  printArray,
  testSort,
  copyArray,
} = require("./sortTestHelper");

// 选择排序
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;
}

// 插入排序 **
// 普通
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i ++) {
//     for (j = i; j > 0 && arr[j] < arr[j - 1]; j --) {
//       if (arr[j] < arr[j - 1]) swap(arr, j, j - 1)
//     }
//   }
//   return arr
// }
// 优化
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let e = arr[i];
    for (j = i; j > 0 && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
  return arr;
}

// 归并排序
function _merge(arr, l, mid, r) {
  let aux = new Array(r - l + 1);
  for (let i = l; i <= r; i++) {
    aux[i - l] = arr[i];
  }
  let i = l,
    j = mid + 1;
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j - l];
      j++;
    } else if (j > r) {
      arr[k] = aux[i - l];
      i++;
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l];
      i++;
    } else {
      arr[k] = aux[j - l];
      j++;
    }
  }
}
function _mergeSort(arr, l, r) {
  if (l >= r) return;
  let mid = Math.floor((l + r) / 2);
  _mergeSort(arr, l, mid);
  _mergeSort(arr, mid + 1, r);

  // 优化 近乎有序
  if (arr[mid] > arr[mid + 1]) {
    _merge(arr, l, mid, r);
  }
}
function mergeSort(arr) {
  _mergeSort(arr, 0, arr.length - 1);
}

function _partition(arr, l, r) {
  let v = arr[l]
  let j = l
  for (let i = l + 1; i <= r; i ++) {
    if (arr[i] < v) {
      swap(arr, j + 1, i)
      j ++
    }
  }
  swap(arr, j, l)
  return j
}
function _quickSort(arr, l, r) {
  if (l >= r) return
  // if (r - l <= 15) {

  // }
  let p = _partition(arr, l, r)
  _quickSort(arr, l, p - 1)
  _quickSort(arr, p + 1, r)
}
function quickSort(arr) {
  _quickSort(arr, 0, arr.length - 1)
}
function _quickSort3ways(arr, l, r) {
  if (l >= r) return
  let v = arr[l]
  let lt = l
  let gt = r + 1
  let i = l + 1
  while( i < gt) {
    if (arr[i] < v) {
      swap(arr, i, lt + 1)
      i ++
      lt ++
    } else if (arr[i] > v) {
      swap(arr, i, gt - 1)
      gt --
    } else if (arr[i] == v) {
      i ++
    }
  }
  swap(arr, l, lt)
  _quickSort3ways(arr,l, lt - 1)
  _quickSort3ways(arr, gt, r)
}
function quickSort3ways (arr) {
  _quickSort3ways(arr, 0, arr.length - 1)
}

let n = 100000;

// 快排 跟 归并
// let arr = generateNearlyOrderedArray(n, 10)
let arr = [1, 4, 3, 2 ,6, 43, 8, 1]
let arrCopy = copyArray(arr)
testSort(mergeSort.name, mergeSort, arrCopy)
// testSort(quickSort.name, quickSort, arr)
testSort(quickSort3ways.name, quickSort3ways, arr)
console.log(arr);



// // // 插入 跟 归并 比较 有序
// let arr = generateNearlyOrderedArray(n, 0);
// let arrCopy = copyArray(arr);
// testSort(insertionSort.name, insertionSort, arr);
// testSort(mergeSort.name, mergeSort, arrCopy);

// // 插入 跟 归并 比较 正常
// let arr = generateRandomArray(n, 0, n)
// let arrCopy = copyArray(arr)
// testSort(insertionSort.name, insertionSort, arr)
// testSort(mergeSort.name, mergeSort, arrCopy)

// let arr = generateRandomArray(n, 0, n);
// let arrCopy = copyArray(arr)
// testSort(selectionSort.name, selectionSort, arr);
// testSort(insertionSort.name, insertionSort, arrCopy)

// let sortedArr = generateNearlyOrderedArray(n, 100);
// let sortedArrCopy = copyArray(sortedArr);
// testSort(selectionSort.name, selectionSort, sortedArr);
// testSort(insertionSort.name, insertionSort, sortedArrCopy);
