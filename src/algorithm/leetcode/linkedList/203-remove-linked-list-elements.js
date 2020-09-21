var removeElements = function (head, val) {
  let dummy = new ListNode()
  dummy.next = head
  let cur = dummy
  while(cur.next) {
    if (cur.next.val == val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return dummy.next
}
