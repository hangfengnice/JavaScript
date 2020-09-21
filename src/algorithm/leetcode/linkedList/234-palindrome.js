function palindrome(head) {
  let list = [],
    h = head;
  while (h) {
    list.push(h);
    h = h.next;
  }
  let l = 0,
    r = list.length - 1;
  while (l < r) {
    if (list[l].val != list[r].val) return false;
    l++;
    r--;
  }
  return true;
}

// [1, 2, 1]
var isPalindrome = function (head) {
  let frontPointer = head;
  return recursivelyCheck(head);

  function recursivelyCheck(currentNode) {
    if (currentNode) {
      //1, 2, 1
      if (!recursivelyCheck(currentNode.next)) return false;
      if (currentNode.val != frontPointer.val) return false;
      frontPointer = frontPointer.next;
    }
    return true;
  }
};

var isPalindrome = function (head) {
  if (!head) return true;
  let firstHalfEnd = endOfFirstHalf(head);
  let secondHalfStart = reverseList(firstHalfEnd.next);
  let p1 = head;
  let p2 = secondHalfStart;
  let result = true;
  while (result && p2) {
    if (p1.val != p2.val) result = false;
    p1 = p1.next;
    p2 = p2.next;
  }

  firstHalfEnd.next = reverseList(secondHalfStart);
  return result;
  function reverseList(head) {
    let prev = null;
    let cur = head;
    while (cur) {
      let nextTmp = cur.next;
      cur.next = prev;
      prev = cur;
      cur = nextTmp;
    }
    return prev;
  }
  function endOfFirstHalf(head) {
    let fast = head;
    let slow = head;
    while (fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }
};
