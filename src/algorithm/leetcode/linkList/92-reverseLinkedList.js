function reverseLinked(head, m, n) {
  if (head == null) return null;
  let cur = head,
    prev = null;
  while (m > 1) {
    prev = cur;
    cur = cur.next;
    n--;
    m--;
  }
  let con = prev,
    tail = cur,
    third = null;
  while (n > 0) {
    third = cur.next;
    cur.next = prev;
    prev = cur;
    cur = third;
    n--;
  }
  if (con != null) {
    con.next = prev;
  } else {
    head = prev;
  }
  tail.next = cur;
  return head;
}
