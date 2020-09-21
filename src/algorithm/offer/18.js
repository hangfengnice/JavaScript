// 删除链表的节点
var deleteNode = function (head, val) {
  let dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;
  let cur = head;
  while (cur.val != val) {
    prev = prev.next;
    cur = cur.next;
  }
  prev.next = prev.next.next;
  return dummy.next;
};


var deleteNode1 = function (head, val) {
  if (head == null) return head
  if (head.val == val) return head.next
  head.next = deleteNode1(head.next)
  return head
}
