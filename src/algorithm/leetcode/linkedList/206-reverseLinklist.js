function reverseLink(head) {
  let prev = null, cur = head
  while(cur != null) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

function recursion(head) {
  if (head == null || head.next == null) return head
  let p = recursion(head.next)
  head.next.next = head
  head.next = null
  return p
}
