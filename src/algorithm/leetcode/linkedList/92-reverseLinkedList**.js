var reverseBetween = function (head, m, n) {
  let dummy = new ListNode(null);
  dummy.next = head;
  let temphead = dummy;
  for (let i = 1; i < m; i++) {
    temphead = temphead.next;
  }
  let prev = null;
  let cur = temphead.next;
  for (let i = 0; i <= n - m; i++) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  temphead.next.next = cur;
  temphead.next = prev;
  return dummy.next;
};
