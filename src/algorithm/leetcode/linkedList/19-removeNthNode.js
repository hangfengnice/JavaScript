function removeNthNode(head, n) {
  let dummy = new ListNode();
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
}

// [1, 2, 3] 2
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let length = 0;

  let first = head;
  while (first != null) {
    length++;

    first = first.next;
  }
  length -= n;
  first = dummy;
  while (length) {
    length--;
    first = first.next;
  }
  first.next = first.next.next;
  return dummy.next;
};
