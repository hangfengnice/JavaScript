function oddEven(head) {
  let odd = new ListNode(),
    l = odd;
  let even = new ListNode(),
    r = even;
  let count = 1;
  while (head != null) {
    if (count % 2) {
      l.next = head;
      l = l.next;
    } else {
      r.next = head;
      r = r.next;
    }
    count++;
    head = head.next;
  }
  r.next = null;
  l.next = even.next;
  return odd.next;
}
