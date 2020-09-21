var reorderList = function (head) {
  if (head == null) return head
  let list = []
  while(head != null) {
    list.push(head)
    head = head.next
  }

  let i = 0, j = list.length - 1

  while(i < j) {
    list[i ++].next = list[j]
    if (i == j) break
    list[j --].next = list[i]
  }
  list[i].next = null
}

var reorderList1 = function (head) {
  if (head == null || head.next == null || head.next.next == null) return
  let len = 0
  let h = head
  while(h != null) {
    len ++
    h = h.next
  }
  // [1, 2, 3, 4, 5]
  reorderListHelper(head, len)
  function reorderListHelper(head, len) {
    if (len == 1) {
      let outTail = head.next
      head.next = null
      return outTail
    }
    if (len == 2) {
      let outTail = head.next.next
      head.next.next = null
      return outTail
    }
    let tail = reorderListHelper(head.next, len - 2)
    let subhed = head.next
    head.next = tail
    let outTail = tail.next
    tail.next = subhed
    return outTail
  }
}
