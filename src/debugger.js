var deleteNthNode = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;
  // [1, 2,3 ,4,5] 2
  while (n) {
    fast = fast.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};
