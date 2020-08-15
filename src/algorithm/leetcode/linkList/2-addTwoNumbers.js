function addTwoNumbers(l1, l2) {
  let dummy = new ListNode();
  let l = l1,
    r = l2,
    cur = dummy;
  let carry = 0;
  while (l != null || r != null) {
    let x = l != null ? l.val : 0;
    let y = r != null ? r.val : 0;
    let sum = x + y + carry;
    carry = Math.floor(sum / 10);
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    if (l != null) l = l.next;
    if (r != null) r = r.next;
  }
  if (carry > 0) {
    cur.next = new ListNode(carry);
  }
  return dummy.next;
}
