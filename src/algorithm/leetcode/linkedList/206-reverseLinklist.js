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
var reverseList1 = function (head) {
  var prev = null, cur = head
  while(cur != null) {
    let next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

var reverseList = function (head) {
  if (head == null || head.next == null) return head
  let p = reverseList(head.next)
  head.next.next = head
  head.next = null
  return p
}
