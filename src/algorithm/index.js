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
