var hasCycle = function (head) {
  var map = new Set()
  while(head) {
    if (map.has(head)) {
      return true
    }
    map.add(head)
    head = head.next
  }
  return false
}

var hasCycle = function (head) {
  if (!head || !head.next) return false

  let slow = head
  let fast = head.next
  while(slow != fast) {
    if (!fast || !fast.next) {
      return false
    }
    slow = slow.next
    fast = fast.next.next

  }
  return true
}