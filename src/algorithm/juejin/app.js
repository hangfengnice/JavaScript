const { insert } = require("ramda");

var validPalindrome = function (s) {
  const len = s.length;
  let i = 0,
    j = len - 1;
  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }
  if (isPalindrome(i + 1, j)) {
    return true;
  }
  if (isPalindrome(i, j - 1)) {
    return true;
  }

  function isPalindrome(i, j) {
    while (i < j) {
      if (s[i] != s[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }
  return false;
};

class WordDictionary {
  constructor() {
    this.words = {};
  }
  addWords(w) {
    this.words[w.length]
      ? this.words[w.length].push(w)
      : (this.words[w.length] = [w]);
  }
  searchWord(w) {
    if (!this.words[w.length]) return false;

    if (w.indexOf(".") != -1) {
      let reg = new RegExp(w);
      return this.words[w.length].some((i) => reg.test(i));
    }
    return this.words[w.length].some((i) => i.includes(w));
  }
}

const max = Math.pow(2, 32) - 1;
const min = -max - 1;
const myAtoi = function (str) {
  const ret = /\s*([-\+]?[0-9]+).*/;
  const groups = str.match(ret);
  let targetNum = 0;
  if (groups) {
    console.log(groups);
    targetNum = +groups[1];
    // if (Number.isNaN(targetNum)) {
    //   targetNum = 0
    // }
  }
  if (targetNum > max) {
    targetNum = max;
  }
  if (targetNum < min) {
    targetNum = min;
  }
  return targetNum;
};

const mergeTwoList = function (l1, l2) {
  let head = new NodeList();
  let cur = head;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 == null ? l2 : l1;
  return head.next;
};
// const deleteDuplicates = function (head) {
//   let cur = head
//   while(cur != null && cur.next != null) {
//     if (cur.val === cur.next.val) {
//       cur.next = cur.next.next
//     } else {
//       cur = cur.next
//     }
//   }
//   return head
// }
const deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let dummy = new NodeList();
  dummy.next = head;
  let cur = dummy;
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      let val = cur.next.val;
      while (cur.next && cur.next.val == val) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
};
const removeNthNode = function (head, n) {
  let dummy = new NodeList();
  dummy = head;
  let fast = dummy,
    slow = dummy;
  while (n-- > 0) {
    fast = fast.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};

const reverseList = function (head) {
  let pre = null;
  let cur = head;
  while (cur != null) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

const reverseBetween = function (head, m, n) {
  let pre, cur, leftHead;
  const dummy = new NodeList();
  dummy.next = head;
  let p = dummy;
  for (let i = 0; i < m - 1; i++) {
    p = p.next;
  }
  leftHead = p;
  let start = leftHead.next;
  pre = start;
  cur = pre.next;
  for (let i = m; i < n; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  leftHead.next = pre;
  start.next = cur;
  return dummy;
};

// 递归
function R(head) {
  if (head.next == null) return head;
  let last = R(head.next);
  head.next.next = head;
  head.next = null;
  return last;
}

let successor = null;
function reverseN(head, n) {
  if (n == 1) {
    successor = head.next;
    return head;
  }
  let last = reverseN(head.next, n - 1);
  head.next.next = head;
  head.next = successor;
  return last;
}

function reverseMN(head, m, n) {
  if (m == 1) {
    return reverseN(head, n);
  }
  head.next = reverseMN(head.next, m - 1, n - 1);
  return head;
}

const hasCycle = function (head) {
  while (head) {
    if (head.flag) return true;
    else {
      head = head.next;
      head.flag = true;
    }
  }
  return false;
};
const hasCycleFS = function (head) {
  let fast = head;
  let slow = head;
  while (true) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == null || slow == null) return false;
    if (fast == slow) return true;
  }
};

const leftToRigth = {
  "{": "}",
  "[": "]",
  "(": ")",
};

const isValid = function (str) {
  if (!str) return true;
  const stack = [];
  const len = str.length;
  for (let i = 0; i < len; i++) {
    let ch = str[i];
    if (/[({\[]/.test(ch)) {
      stack.push(leftToRigth[ch]);
    } else {
      if (!stack.length || stack.pop() != ch) return false;
    }
  }
  return !stack.length;
};
const dailyTemperature = function (T) {
  const len = T.length;
  const stack = [];
  const res = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      const top = stack.pop();
      res[top] = i - top;
    }
    stack.push(i);
  }
  return res;
};
let arr = [3, 4, 5, 3, 2, 6, 5, 3];
const myDaily = function (arr) {
  let len = arr.length;
  const stack = [];
  const res = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      let top = stack.pop();
      res[top] = i - top;
    }
    stack.push(i);
  }
  return res;
};

class MinStack {
  constructor() {
    this.stack = [];

    this.stack2 = [];
  }
  push(x) {
    this.stack.push(x);
    if (this.stack2.length == 0 || this.stack2[this.stack2.length - 1] >= x) {
      this.stack2.push(x);
    }
  }
  pop() {
    let pop = this.stack.pop();
    if (pop == this.stack2[this.stack2.length - 1]) this.stack2.pop();
    return pop;
  }
  top() {
    return this.stack2[this.stack2.length - 1];
  }
}
// let nums = [1, 3, -1, -3, 5, 3, 6, 7];
const maxSlide = function (nums, k) {
  const len = nums.length;
  const res = [];
  const deque = [];
  for (let i = 0; i < len; i++) {
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }
    deque.push(i);
    while (deque.length && deque[0] <= i - k) {
      deque.shift();
    }
    if (i >= k - i) {
      res.push(nums[deque[0]]);
    }
  }
  return res;
};

const permute = function (nums) {
  const len = nums.length;
  const curr = [];
  const res = [];
  const visited = {};
  function dfs(n) {
    if (n == len) return res.push(curr.slice());
    for (let i = 0; i < len; i++) {
      if (!visited[nums[i]]) {
        visited[nums[i]] = true;
        curr.push(nums[i]);
        dfs(n + 1);
        curr.pop();
        visited[nums[i]] = false;
      }
    }
  }
  dfs(0);
  return res;
};
const subset = function (nums) {
  const res = [];
  const len = nums.length;
  const subset = [];
  dfs(0);
  function dfs(index) {
    res.push(subset.slice());
    for (let i = index; i < len; i++) {
      subset.push(nums[i]);
      dfs(i + 1);
      subset.pop();
    }
  }
  return res;
};
const combine = function (n, k) {
  let ret = [];
  let subset = [];
  dfs(1);
  function dfs(index) {
    if (subset.length == k) {
      return ret.push(subset.slice());
    }
    for (let i = index; i <= n; i++) {
      subset.push(i);
      dfs(i + 1);
      subset.pop();
    }
  }
  return ret;
};
// var subsets = function(nums) {
//   let res = []
//   let len = nums.length
//   let subset = []
//   function dfs(n) {
//       if (n === len) { // 遍历到叶子节点，存入结果
//           res.push(subset.slice())
//           return
//       }
//       // 第n层，取，dfs到下一层
//       subset.push(nums[n])
//       dfs(n + 1)
//       // 第n层，不取，dfs到下一层
//       subset.pop()
//       dfs(n + 1)
//   }
//   dfs(0) // 从root开始
//   return res
// };
// console.log(subsets([1, 2 ,3 ,4]));

const preverseOrder = function (root) {
  let res = [];
  if (!root) return ret;
  let stack = [];
  stack.push(root);
  while (stack.length) {
    let top = stack.shift();
    res.push(top.val);
    if (top.left) stack.push(top.left);
    if (top.right) stack.push(top.right);
  }
  return res;
};

const postOrder = function (root) {
  let res = [];
  if (!root) return res;
  let stack = [];
  stack.push(root);
  while (stack.length) {
    const cur = stack.pop();
    res.unshift(cur.val);
    if (cur.left) stack.push(cur.left);
    if (cur.right) stack.push(cur.right);
  }
  return res;
};
const inOrder = function (root) {
  let res = [];
  let stack = [];
  let cur = root;
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    res.push(cur.val);
    cur = cur.right;
  }
  return res;
};

const levelOrder = function (root) {
  const res = [];
  if (!root) return res;
  const queue = [];
  queue.push(root);
  while (queue.length) {
    const level = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const top = queue.shift();
      level.push(top.val);
      if (top.left) queue.push(top.left);
      if (top.right) queue.push(top.right);
    }
    res.push(level);
  }
  return res;
};
const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
    },
    right: {
      val: "E",
    },
  },
  right: {
    val: "C",
    right: {
      val: "F",
    },
  },
};
const root1 = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D",
    },
    right: {
      val: "E",
    },
  },
  right: {
    val: "C",
    right: {
      val: "F",
    },
  },
};
const inverTree = function (root) {
  if (!root) return root;
  let right = inverTree(root.right);
  let left = inverTree(root.left);
  root.right = left;
  root.left = right;
  return root;
};
function search(root, n) {
  if (!root) {
    return;
  }
  if (root.val == n) {
    return root;
  }
}

function isValidBst(root) {
  function dfs(root, min, max) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
  }
  return dfs(root, -Infinity, Infinity);
}

function arrayToB(nums) {
  if (!nums.length) return null;
  const root = buildt(0, nums.length - 1);
  function buildt(low, high) {
    if (low > high) return null;
    const mid = Math.floor(low + (high - low) / 2);
    const cur = new TreeNode(nums[mid]);
    cur.left = buildt(low, mid - 1);
    cur.right = buildt(mid + 1, high);
    return cur;
  }
  return root;
}

const isBalance = function (root) {
  let flag = true;
  function dfs(root) {
    if (!root || !flag) return 0;
    const left = dfs(root.left);
    const right = dfs(root.right);
    if (Math.abs(left - right) > 1) {
      flag = fasle;
      return 0;
    }
    return Math.max(left, right) + 1;
  }

  dfs(root);
  return flag;
};

const balanceB = function (root) {
  const nums = [];
  function inorder(root) {
    if (!root) return;
    inorder(root.left);
    nums.push(root.val);
    inorder(root.right);
  }
  function buildV(low, high) {
    if (low > high) return;
    const mid = Math.floor(low + (high - low) / 2);
    let cur = new TreeNode(nums[mid]);
    cur.left = buildV(low, mid - 1);
    cur.right = buildV(mid + 1, high);
    return cur;
  }

  inorder(root);
  return buildV(0, nums.length - 1);
};

function downHeap(low, high) {
  let i = low,
    j = i * 2 + 1;
  while (j < high) {
    if (j + 1 <= high && head[j + 1] > head[j]) {
      j = j + 1;
    }
    if (heap[i] < heap[j]) {
      const temp = heap[i];
      heap[i] = heap[j];
      heap[j] = temp;
      i = j;
      j = i * 2 + 1;
    } else {
      break;
    }
  }
}
let nums = [9, 8, 7, 6, 5, 4, 3, 2, 1]
function findKthLargest(nums, k) {
  const heap = []
  let n = 0
  const len = nums.length
  function createHeap() {
    for(let i = 0; i< k; i ++) {
      insert(nums[i])
    }
  }
  function insert(x) {
    heap[n] = x
    upheap(0, n)
    n ++
  }
  function upheap(low, high) {
    let i = high
    let j = Math.floor((i - 1) / 2)
    while(j > low) {
      if (heap[j] > heap[i]) {
        const temp = heap[j]
        heap[j] = heap[i]
        heap[i] = temp
        i = j
        j = Math.floor((i - 1) / 2)
      } else {
        break
      }
    }
  }
  function updateHeap() {
    for(let i = k; i < len; i ++) {
      if (nums[i] > heap[0]) {
        heap[0] = nums[i]
        downHeap(0, k)
      }
    }
  }
  function downHeap(low, high) {
    let i = low, j = i * 2 + 1
    while(j <= high) {
      if (j + 1 <= high && heap[j + 1] < heap[j]) {
        j = j + 1
      }
      if (heap[i] > heap[j]) {
        const temp = heap[j]
        heap[j] = heap[i]
        heap[i] = temp

        i = j
        j = i * 2 + 1
      } else {
        break
      }
    }
  }

  createHeap()
  updateHeap()

  return heap[0]

}

function betterSort (nums) {

  for(let i = 0; i < nums.length; i ++) {
    let flag = true
    for(let j = 0; j < nums.length - i - 1; j ++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        flag = false
      }
    }
    if (flag) return nums
  }
  return nums

}
function selectSort(arr) {
  let min
  for(let i = 0; i < arr.length; i ++) {
    min = i
    for(let j = i + 1; j < arr.length; j ++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (min != i) [arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr
}

function insertSort(arr) {
  let temp
  for(let i = 1; i < arr.length; i ++) {
    temp = arr[i]
    let j = i
    while(j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[--j]
    }
    arr[j] = temp
  }
  return arr
}
function mergeSort(arr) {
  let len = arr.length
  if (len <= 1) return arr;
  const mid = Math.floor(len / 2)
  const leftA = mergeSort(arr.slice(0, mid))
  const rightA = mergeSort(arr.slice(mid, len))
  arr = mergeArr(leftA, rightA)
  return arr
  function mergeArr(arr1, arr2) {
    let i = 0, j = 0
    const res = []
    let len1 = arr1.length
    let len2 = arr2.length
    while(i < len1 && j < len2) {
      if (arr1[i] < arr2[j]) {
        res.push(arr1[i ++])
      } else {
        res.push(arr2[j ++])
      }
    }
    if (i < len1) {
      return res.concat(arr1.slice(i))
    } else {
      return res.concat(arr2.slice(j))
    }
  }
}
;
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (arr.length > 1) {
    const nextPivot = partition(arr, left, right)
    if (left < nextPivot - 1) {
      quickSort(arr, left, nextPivot - 1)
    }
    if (nextPivot < right) {
      quickSort(arr, nextPivot, right)
    }
  }
  return arr
}
function partition(arr, left, right) {
  let pivotV = arr[Math.floor(left + (right - left) / 2)]
  let i = left
  let j = right
  while(i < j) {
    while(arr[i] < pivotV) {
      i ++
    }
    while(arr[j] > pivotV) {
      j --
    }
    if (i <= j) {
      swap(arr, i, j)
      i ++
      j --
    }
  }
  return i
}
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
function coinChange(coins, amount) {
  const f = []
  f[0] = 0
  for(let i = 1; i <= amount; i ++) {
    f[i] = Infinity
    for(let j = 0; j < coins.length; j ++) {
      if (i - coins[j] >= 0) {
        f[i] = Math.min(f[i], f[i - coins[j]] + 1)
      }
    }
  }
  if (f[amount] == Infinity) return -1
  return f[amount]
}

// 入参是物品的个数和背包的容量上限，以及物品的重量和价值数组
function knapsack(n, c, w, value) {
  // dp是动态规划的状态保存数组
  const dp = (new Array(c+1)).fill(0)
  // res 用来记录所有组合方案中的最大值
  let res = -Infinity
  for(let i=1;i<=n;i++) {
      for(let v=c;v>=w[i];v--) {
          // 写出状态转移方程
          dp[v] = Math.max(dp[v], dp[v-w[i]] + value[i])
          // 即时更新最大值
          if(dp[v] > res) {
              res = dp[v]
          }
      }
  }
  return res
}





var Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

Window.prototype.tabClose = function (index) {
  // Only change code below this line
  var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab
  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  // Only change code above this line
  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
