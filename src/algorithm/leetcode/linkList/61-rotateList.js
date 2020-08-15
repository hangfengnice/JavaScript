function rotateList(head, k) {
  let fast = head,
    slow = head;
  while (k--) {
    if (fast && fast.next) fast = fast.next;
    else fast = head;
  }
  if (fast == slow) return head;
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  fast.next = head;
  head = slow.next;
  slow.next = null;

  return head;
}
