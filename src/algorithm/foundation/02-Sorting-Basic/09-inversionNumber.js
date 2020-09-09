var __merge = function (arr, l, mid, r) {
  let aux = Array(r - l + 1);
  for (let i = l; i <= r; i++) {
    aux[i - l] = arr[i];
  }
  // 初始化逆序数对个数 res = 0
  let res = 0;
  // 初始化，i指向左半部分的起始索引位置l；j指向右半部分起始索引位置mid+1
  let j = l,
    k = mid + 1;
  for (let i = l; i <= r; i++) {
    if (j > mid) {
      // 如果左半部分元素已经全部处理完毕
      arr[i] = aux[k - l];
      k++;
    } else if (k > r) {
      // 如果右半部分元素已经全部处理完毕
      arr[i] = aux[j - l];
      j++;
    } else if (aux[j - l] <= aux[k - l]) {
      // 左半部分所指元素 <= 右半部分所指元素
      arr[i] = aux[j - l];
      j++;
    } else {
      // 右半部分所指元素 < 左半部分所指元素
      arr[i] = aux[k - l];
      k++;
      // 此时, 因为右半部分k所指的元素小
      // 这个元素和左半部分的所有未处理的元素都构成了逆序数对
      // 左半部分此时未处理的元素个数为 mid - j + 1
      res += mid - j + 1;
    }
  }
  return res;
};

// 求arr[l..r]范围的逆序数对个数
// 思考: 归并排序的优化可否用于求逆序数对的算法? :)
var __inversionCount = function (arr, l, r) {
  if (l >= r) return 0;
  let mid = Math.floor(Math.random() * (r - l + 1)) + l;

  // 求出 arr[l...mid] 范围的逆序数
  let res1 = __inversionCount(arr, l, mid);
  // 求出 arr[mid+1...r] 范围的逆序数
  let res2 = __inversionCount(arr, mid + 1, r);

  return res1 + res2 + __merge(arr, l, mid, r);
};

// 递归求arr的逆序数对个数
var inversionCount = function (arr) {
  return __inversionCount(arr, 0, arr.length - 1);
};

let res = inversionCount([3, 2, 1]);

console.log(res);
