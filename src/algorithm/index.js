const twoSum = function (nums, target) {
  const diff = {}
  for (let i = 0; i < nums.length; i ++) {
    if (diff[target - nums[i]] !== undefined) {
      return [diff[target - nums[i]], i]
    }
    diff[nums[i]] = i
  }
}
const twoSumMap = function (nums, target) {
  let sumMap = new Map()
  for(let i = 0; i < nums.length; i ++) {
    if (sumMap.get(target - nums[i]) !== undefined) {
      return [sumMap.get(target - nums[i]), i]
    }
    sumMap.set(nums[i], i)
  }
}

// let arr = [1, 2, 3, 5, 8]
// let ret = twoSum(arr, 8)
// let mapRet = twoSumMap(arr, 3)
// console.log(ret, mapRet);

const mergeTwoLists = (l1, l2) => {
  let head = new ListNode()
  let cur = head
  while(l1 && l2) {
    if(l1.val <= l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  cur.next = l1 == null ? l2 : l1
  return cur.next
}

const deleteDuplicates = head => {
  let cur = head
  while(cur != null && cur.next != null) {
    if (cur.val == cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
}
const deleteDuplicates2 = head => {
  if (!head || !head.next) return head
  let dummy = new ListNode()
  dummy.next = head
  let cur = dummy
  while(cur.next && cur.next.next) {
    if (cur.next.val == cur.next.next.val) {
      let val = cur.next.val
      while(cur.next && cur.next.val == val) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return dummy.next
}

var deleteDuplicates3 = head => {
  if (!head) return
  if (head.next && head.val === head.next.val) {
    while(head.next && head.val == head.next.val) {
      head = head.next
    }
    return deleteDuplicates3(head.next)
  } else {
    head.next = deleteDuplicates3(head.next)
  }
  return head
}

const removeNthNode = (head, n) => {
  const dummy = new ListNode()
  dummy.next = head
  let fast = dummy
  let slow = dummy
  while(n !== 0) {
    fast = fast.next
    n --
  }
  while(fast.next) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return dummy.next
}

const reverseList = (head) => {
  let pre = null
  let cur = head
  while(cur != null) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

const reverseBetween = (head, m, n) => {
  let pre, cur, lefthead
  const dummy = new NodeList()
  dummy.next = head
  let p = dummy
  for (let i = 0; i < m - 1; i ++) {
    p = p.next
  }
  lefthead = p
  let start = lefthead.next
  pre = start
  cur = pre.next
  for (let i = m; i < n; i ++) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  lefthead.next = pre
  start.next = cur
  return dummy.next
}


const daliyTemperatures = (t) => {
  let len = t.length
  const stack = []
  const res = new Array(len).fill(0)
  for(let i = 0; i < len; i ++) {
    while(stack.length && t[i] > t[stack[stack.length - 1]]) {
      let top = stack.pop()
      res[top] = i - top
    }
    stack.push(i)
  }
  return res
}

const maxSlidingWindow = (nums, k) => {
  const len = nums.length;
  const ret = []
  const queue = []
  for (let i = 0; i < len; i ++) {
    while(queue.length && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop()
    }
    queue.push(i)
    while(queue.length && queue[0] <= i - k) {
      queue.shift()
    }
    if (i >= k - 1) {
      ret.push(queue[0])
    }
  }
  return ret
}
const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};

const reserveRoot = root => {
  const ret = []
  ret.push(root)
  while(ret.length) {
    let top = ret.shift()
    if (top.left) {
      ret.push(top.left)
    }
    if (top.right) {
      ret.push(top.right)
    }
    console.log(top.val);
  }
}
reserveRoot(root)

const permute = nums => {
  const len = nums.length
  const curr = []
  const ret = []
  const visited = {}
  function dfs(nth) {
    if (nth == len) {
      ret.push(curr.slice())
      return
    }
    for (let i = 0; i < len; i ++) {
      if (!visited[nums[i]]) {
        visited[nums[i]] = 1
        curr.push(nums[i])
        dfs(nth + 1)
        visited[nums[i]] = 0
        curr.pop()
      }
    }
  }
  dfs(0)
  return ret
}

const subsets = nums => {
  const ret = []
  const subset = []
  dfs(0)
  function dfs(nth) {
    ret.push(subset.slice())
    for (let i = nth; i < nums.length; i ++) {
      subset.push(nums[i])
      dfs(i + 1)
      subset.pop()
    }
  }
  return ret
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}



const root1 = {
  val: "1",
  right: {
    val: "2",
    left: {
      val: "3"
    },
    right: {
      val: '4'
    }
  }
};

const preorderTraversal = root => {
  const ret = []
  if (!root) return res
  const stack = []
  stack.push(root)
  while(stack.length) {
    let top = stack.pop()
    ret.unshift(top.val)

    if (top.left) {
      stack.push(top.left)
    }
    if (top.right) {
      stack.push(top.right)
    }
  }
  return ret
}
// const inorderTraversal = root => {
//   const ret = []
//   const stack = []
//   let cur = root
//   while(cur || stack.length) {
//     while(cur) {
//       stack.push(cur)
//       cur = cur.left
//     }
//     cur = stack.pop()
//     ret.push(cur.val)
//     cur = cur.right
//   }
//   return ret
// }

const inorderTraversal = root => {
  const ret = []
  const stack = []
  let cur = root
  while(cur || stack.length) {
    while(cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    ret.push(cur.val)
    cur = cur.right
  }
  return ret
}
const levelOrder = root => {
  const ret = []
  if (!root) return ret
  const queue = []
  queue.push(root)
  while(queue.length) {
    const level = []
    let len = queue.length
    for (let i = 0; i < len; i ++) {
      const top = queue.shift()
      level.push(top.val)
      if (top.left) {
        queue.push(top.left)
      }
      if (top.right) {
        queue.push(top.right)
      }
    }
    ret.push(level)
  }
  return ret
}
let result1 = levelOrder(root1)
console.log(result1, 'result1');
console.log("\\", '/');

const sortedArrayToBST = (nums) => {
  if (!nums.length) return null
  const root = builtBST(0, nums.length - 1)
  function builtBST(low, high) {
    if (low > high) return null
    const mid = Math.floor(low + (low + high) / 2)
    const cur = new TreeNode(nums[mid])
    cur.left = builtBST(low, mid - 1)
    cur.right = builtBST(mid + 1, high)
    return cur
  }
  return root
}

const isBalanced = root => {
  let flag = true
  function dfs(root) {
    if (!root || !flag)
    return 0
    const left = dfs(root.left)
    const right = dfs(root.right)
    if (Math.abs(left - right) > 1) {
      flag = false
      return 0
    }
    return Math.max(left, right) + 1

  }
  dfs(root)
  return flag
}

const balanceBST = root => {
  const nums = []
  function inorder(root) {
    if (!root) return null
    inorder(root.left)
    nums.push(root.val)
    inorder(root.right)
  }
  function builtAVL(low, high) {
    if (low > high) return null
    const mid = Math.floor(low + (low + high) / 2)
    let cur = new TreeNode(nums[mid])
    cur.left = builtAVL(low, mid - 1)
    cur.right = builtAVL(mid + 1, high)
    return cur
  }
  inorder(root)
  return builtAVL(0, nums.length - 1)
}

const findKthLargest = (nums, k) => {
  const heap = []
  let n = 0
  const len = nums.length
  function createHeap() {
    for (let i = 0; i < k; i ++) {
      insert(nums[i])
    }
  }
  function upHeap(low, high) {
    let i = high
    let j = Math.floor((i - 1) / 2)
    while(j >= low) {
      if (head[j] > heap[i]) {
        const temp = heap[i]
        heap[i] = heap[j]
        heap[j] = temp
        i = j
        j = Math.floor( (i - 1) / 2)

      } else {
        break
      }
    }
  }
  function insert(x) {
    heap[n] = x
    upHeap(0, n)
    n ++
  }
  createHeap()
  updateHeap()

}

let arr = [1, 2, 6,4, 2, 2, 3]
// function bubbleSort (arr, n = arr.length) {
//   let newn
//   do {
//     newn = 0
//     for (let i = 1; i < n; i ++) {
//       if (arr[i] < arr[i - 1]) {
//         [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
//         newn = i
//       }
//     }
//     n = newn
//   } while(newn > 0)
// }

bubbleSort(arr)
console.log(arr);


function bubbleSort(arr, n = arr.length) {
  let newn
  do {
    newn = 0
    for (let i = 1; i < n; i ++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
        newn = i
      }
    }
    n = newn
  } while(newn)
}

const coinChange = function (coins, amount) {
  const f = []
  f[0] = 0
}
