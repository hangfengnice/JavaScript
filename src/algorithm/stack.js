// function ListNode (val) {
//   this.val = val
//   this.next = null
// }

// function TreeNode (val) {
//   this.val = val
//   this.left = this.right = null
// }

// const root = {
//   val: "A",
//   left: {
//     val: 'B',
//     left: {
//       val: 'D'
//     },
//     right: {
//       val: "E"
//     }
//   },
//   right: {
//     val: 'C',
//     right: {
//       val: "F"
//     }
//   }
// }


// function preorder (root) {
//   if (!root) return

//   console.log('当前遍历的节点是：', root.val);
//   preorder(root.left)
//   preorder(root.right)
// }
// // preorder(root)
// const nums = [2, 7, 11, 15]
// // let twoSum = function (nums, target) {
// //   const diffs = {}
// //   for (let i = 0; i < nums.length; i ++) {
// //     if (diffs[target - nums[i]] !== undefined) {
// //       return [diffs[target - nums[i]], i]
// //     }
// //     diffs[nums[i]] = i
// //   }
// // }
// let twoSum = function (nums, target) {
//   let map = new Map()
//   for (let i = 0; i < nums.length; i ++) {
//     if (map.has(target - nums[i])) {
//       return [map.get(target - nums[i]), i]
//     }
//     map.set(nums[i], i)
//   }
// }
// // let ret = twoSum(nums, 13)
// // console.log(ret);

// let nums1 = [1, 2, 3, 0, 0, 0], m = 3
// let nums2 = [2, 5, 6], n = 3

// const merge = function (nums1, m, nums2, n) {
//   let i = m - 1, j = n - 1, k = m + n - 1
//   while(i >= 0 && j >= 0) {
//     if (nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i]
//       k --
//       i --
//     } else {
//       nums1[k] = nums2[j]
//       j --
//       k --
//     }
//   }
//   while(j >=0) {
//     nums1[k] = nums2[j]
//     j --
//     k --
//   }
// }
// // merge(nums1, 3, nums2, 3)
// // console.log(nums1);
// const nums3 = [-1, 0, 1, 2, -1, -4]
// const threeSum = function (nums) {
//   let res = []
//   let sum = 0
//   nums = nums.sort((a, b) => a - b)
//   const len = nums.length
//   for (let i = 0; i < len - 2; i ++) {
//     let j = i + 1
//     let k = len - 1
//     if (i > 0 && nums[i] == nums[i - 1]) {
//       continue
//     }
//     while(j < k) {
//       if (nums[i] + nums[j] + nums[k] < 0) {
//         j ++
//         while(j < k && nums[j] === nums[ j - 1]) {
//           j ++
//         }
//       } else if (nums[i] + nums[j] + nums[k] > 0) {
//         k --
//         while(j < k && nums[k] === nums[ k + 1]) {
//           k --
//         }
//       } else {
//         res.push([nums[i], nums[j], nums[k]])
//         j ++
//         k --
//         while(j < k && nums[j] === nums[ j - 1]) {
//           j ++
//         }
//         while(j < k && nums[k] === nums[ k + 1]) {
//           k --
//         }
//       }
//     }
//   }
//   return res
// }

// // let ret3 = threeSum(nums3)
// // console.log(ret3);

// function isPalindrome (str) {
//   for (let i = 0; i < str.length / 2; i ++) {
//     if (str[i] != str[str.len - 1 - i]) {
//       return false
//     }
//   }
//   return true
// }

// const validPalindrome = function (s) {
//   const len = s.length
//   let i = 0,  j = len - 1
//   while(i < j && s[i] == s[j]) {
//     i ++
//     j --
//   }
//   if(isPalindrome(i + 1, j)) {
//     return true
//   }
//   if(isPalindrome(i, j - 1)) {
//     return true
//   }
//   function isPalindrome(st, ed) {
//     while(st < ed) {
//       if (s[st] != s[ed]) {
//         return false
//       }
//       st ++
//       ed --
//     }
//     return true
//   }
//   return false
// }

// // let ret4 = validPalindrome('helle0h')
// // console.log(ret4);

// const WordDictionary = function () {
//   this.words = {}
// }

// WordDictionary.prototype.addWord = function (word) {
//   if (this.words[word.length]) {
//     this.words[word.length].push(word)
//   }
//   this.words[word.length] = [word]
// }
// WordDictionary.prototype.search = function (word) {
//   if (!this.words[word.length]) return false
//   const len = word.length
//   if (!word.includes('.')) {
//     return this.words[word.length].includes(word)
//   }
//   const reg = new RegExp(word)
//   return this.words[word.length].some(item => reg.test(item))
// }
// const myAtoi = function (str) {
//   const reg = /\s*([-\+]?\d*).*/
//   const groups = str.match(reg)
//   const max = Math.pow(2, 32) - 1
//   const min = - max - 1
//   let targetNum = 0
//   if (groups) {
//     targetNum = +groups[1]
//     if (isNaN(targetNum)) {
//       targetNum = 0
//     }
//   }
//   if (targetNum > max) {
//     return max
//   } else if (targetNum < min) {
//     return min
//   }
//   return targetNum
// }
// // let ret5 = myAtoi('-324234 afa  ')
// // console.log(ret5);

// const mergeTwoLists = function (l1, l2) {
//   let head = new ListNode()
//   let cur = head
//   while(l1 && l2) {
//     if (l1.val <= l2.val) {
//       cur.next = l1
//       l1 = l1.next
//     } else {
//       cur.next = l2
//       l2 = l2.next
//     }
//     cur = cur.next
//   }
//   cur.next = l1 !== null ? l1 : l2
//   return head.next
// }

// const deleteDuplicates = function (head) {
//   let cur = head
//   while(cur != null && cur.next != null) {
//     if (cur.val == cur.next.val) {
//       cur.next = cur.next.next
//     } else {
//       cur = cur.next
//     }
//   }
//   return head
// }

// const deleteDuplicate = function (head) {
//   if (!head || !head.next) return head
//   let dummy = new ListNode()
//   dummy.next = head
//   let cur = dummy
//   while(cur.next && cur.next.next) {
//     if (cur.next.val == cur.next.next.val) {
//       let val = cur.next.val
//       while(cur.next && cur.next.val == val) {
//         cur.next = cur.next.next
//       }
//     } else {
//       cur = cur.next
//     }
//   }
//   return dummy.next
// }
// const removeNthFromEnd = function (head, n) {
//   const dummy = new ListNode()
//   dummy.next = head
//   let fast = dummy
//   let slow = dummy
//   while(n != 0) {
//     fast = fast.next
//     n --
//   }
//   while(fast.next) {
//     fast = fast.next
//     slow = sow.next
//   }
//   slow.next = slow.next.next
//   return dummy.next
// }

// const reverseList = function (head) {
//   let pre = null
//   let cur = head
//   while(cur != null) {
//     let next = cur.next
//     cur.next = pre
//     pre = cur
//     cur = next
//   }
//   return pre
// }

// const reverseBetween = function (head, m, n) {
//   let pre, cur, leftHead
//   const dummy = new ListNode()
//   dummy.next = head
//   let p = dummy
//   for (let i = 0; i < m - 1; i ++) {
//     p = p.next
//   }
//   leftHead = p
//   let start = leftHead.next
//   pre = start
//   cur = start.next
//   for(let i = m; i < n; i ++) {
//     let next = cur.next
//     cur.next = pre
//     pre = cur
//     cur = next
//   }
//   leftHead.next = pre
//   start.next = cur
//   return dummy.next
// }

// const hasCycle = function (head) {
//   while(head) {
//     if (head.flag) return true
//     else {
//       head.flag = true
//       head = head.next
//     }
//   }
//   return false
// }

// const detectCycle = function (head) {
//   while(head) {
//     if (head.flag) {
//       return head
//     } else {
//       head.flag = true
//       head = head.next
//     }
//   }
//   return null
// }

// const leftToRight = {
//   '(': ')',
//   '[': ']',
//   '{': '}'
// }

// const isValid = function (s) {
//   if (!s) return true
//   const stack = []
//   const len = s.length
//   for (let i = 0; i < len; i ++) {
//     const ch = s[i]
//     if (ch == '(' || ch == '{' || ch == '[') {
//       stack.push(leftToRight[ch])
//     } else {
//       if (!stack.length || stack.pop() != ch) {
//         return false
//       }
//     }
//   }
//   return !stack.length
// }

// // const dailyTemperatures = function (T) {
// //   const len = T.length
// //   const stack = []
// //   const ret = new Array(len).fill(0)
// //   for(let i = 0; i < len; i ++) {
// //     while(stack.length && T[i] > T[stack[stack.length - 1]]) {
// //       const top = stack.pop()
// //       res[top] = i - top
// //     }
// //     stack.push(i)
// //   }
// //   return res
// // }
// const dailyTemperatures = function (T) {
//   const len = T.length
//   const stack = []
//   const ret = new Array
// }
// const MyQueue = function () {
//   this.stack1 = []
//   this.stack2 = []

// }
// MyQueue.prototype.push = function (x) {
//   this.stack1.push(x)
// }

// MyQueue.prototype.pop = function () {
//   if (this.stack2.length <= 0) {
//     while(this.stack1.length) {
//       this.stack2.push(this.stack1.pop())
//     }
//   }
//   return this.stack2.pop()
// }

// MyQueue.prototype.peek = function () {
//   if (this.stack2.length <= 0) {
//     while(this.stack1.length != 0) {
//       this.stack2.push(this.stack1.pop())
//     }
//   }
//   const stackLen = this.stack2.length
//   return stackLen && this.stack2[stackLen - 1]
// }

// MyQueue.prototype.empty = function () {
//   return !this.stack1.length && !this.stack2.length
// }

// const nums4 = [1, 3, -1, -3, 5, 3, 6, 7], k = 3

// const maxSlidingWindow = function (nums, k) {
//   const len = nums.length
//   const res = []
//   let left = 0
//   let right = k - 1
//   while(right < len) {
//     const max = calMax(nums, left, right)
//     res.push(max)
//     left ++
//     right ++

//   }
//   return res
// }
// function calMax(arr, left, right) {
//   if (!arr || !arr.length) return
//   let maxNum = arr[left]
//   for (let i = 0; i <= right; i ++) {
//     if (arr[i] > maxNum) {
//       maxNum = arr[i]
//     }
//   }
//   return maxNum
// }

// const maxSlidingWindow1 = function (nums, k) {
//   const len = nums.length
//   const ret = []
//   const deque = []
//   for (let i = 0; i < len; i ++) {
//     while(deque.length && nums[deque[deque.length - 1]] < nums[i]) {
//       deque.pop()
//     }
//     deque.push(i)
//   }
//   while(deque.length && deque[0] <= i - k) {
//     deque.shift()
//   }

//   if (i >= k - 1) {
//     res.push(nums[deque[0]])
//   }
//   return res
// }

// const root1 = {
//   val: 'A',
//   left: {
//     val: 'B',
//     left: {
//       val: 'D'
//     },
//     right: {
//       val: 'E'
//     }
//   },
//   right: {
//     val: 'C',
//     right: {
//       val: 'F'
//     }
//   }
// }

// function BFC (root) {
//   const queue = []
//   queue.push(root)
//   while(queue.length) {
//     const top = queue[0]
//     console.log(top.val);
//     if (top.left) {
//       queue.push(top.left)
//     }
//     if (top.right) {
//       queue.push(top.right)
//     }
//     queue.shift()
//   }
// }
// BFC(root1)
// const permute = function (nums) {
//   const len = nums.length
//   const curr = []
//   const res = []
//   const visited = {}
//   function dfs(nth) {
//     if (nth == length) {
//       res.push(curr.slice())
//       return
//     }
//     for(let i = 0; i < len; i++) {
//       if (!visited[nums[i]]) {
//         visited[nums[i]] = 1
//         curr.push(nums[i])
//         dfs(nth + 1)
//         curr.pop()
//         visited[nums[i]] = 0
//       }
//     }
//   }
//   dfs(0)
//   return res
// }


// const isValidBST = function (root) {
//   function dfs(root, minValue, maxValue) {
//     if (!root) return true
//     if (root.val <= minValue || root.val >= maxValue) return false
//     return dfs(root.left, minValue, root.val) && dfs(root.right, root.val, maxValue)
//   }
//   return dfs(root, -Infinity, Infinity)
// }

// const sortedArrayToBST = function (nums) {
//   if (!nums.length) return null
//   const root = buildBST(low, high)
//   function buildBST(low, high) {
//     if (low > high) return null
//     const mid = Math.floor(low + (high - low) / 2)
//     const cur = new TreeNode(nums[mid])

//   }
// }

// const list = [1, 3, 2, 4, 8, 5]
// function bubbleSort( arr ) {
//   for (var i = 0; i < arr.length; i ++) {
//     for (var j = 0; j < arr.length - 1; j ++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//       }
//     }
//   }
//   return arr
// }
// function betterBubbleSort (arr) {
//   for (var i = 0; i < arr.length; i ++) {
//     for (var j = 0; j < arr.length - i - 1; j ++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//       }
//     }
//   }
//   return arr
// }
// // let retList = bubbleSort(list)
// let retList = selectSort(list)
// console.log(retList)

// function selectSort (arr) {
//   const len = arr.length
//   let minIndex

//   for (var i = 0; i < len - 1; i ++) {
//     minIndex = i
//     for (let j = i; j < len; j ++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j
//       }
//     }
//     if (minIndex != i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
//     }
//   }
//   return arr
// }

// function insertSort (arr) {
//   const len = arr.length
//   let temp
//   for (let i = 0; i < len; i ++) {
//     let j = i
//     temp = arr[i]
//     while(j > 0 && arr[j - 1] > temp) {
//       arr[j] = arr[j - 1]
//       j --
//     }
//     arr[j] = temp
//   }
//   return arr
// }

// function quickSort (arr, left = 0, right = arr.length - 1) {
//   if (arr.length > 1) {
//     const nextPivot = partition(arr, left, right)
//     if (nextPivot - 1> left) {
//       quickSort(arr, left, nextPivot - 1)
//     }
//     if (nextPivot < right) {
//       quickSort(arr, nextPivot, right)
//     }
//   }
//   return arr
// }

// const climbStairs = function (n) {
//   const f = []
//   f[1] = 1
//   f[2] = 2
//   for (let i = 3; i < n; i ++) {
//     f[i] = f[i - 1] + f[i - 2]
//   }
//   return f[n]
// }

let coins = [1, 2, 4], amount = 11
function coinChange(coins, amount) {
  const f = []
  f[0] = 0
  for (let i = 1; i <= amount; i ++) {
    f[i] = Infinity
    for(let j = 0; j < coins.length; j ++) {
      // console.log(i)
      if (i - coins[j] >= 0) {

      }
    }
  }
}
let coinsArr = coinChange(coins, amount)
console.log(coinsArr)
