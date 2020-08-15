function removeNthNode(head, n) {
  let dummy = new ListNode();
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;
  for (let i = 0; i < n + 1; i++) {
    fast = fast.next;
  }
  while (fast != null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
}
