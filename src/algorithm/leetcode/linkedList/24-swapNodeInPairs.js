function swapNode(head) {
  let dummy = new ListNode();
  dummy.next = head;
  let p = dummy;
  while (p.next && p.next.next) {
    let node1 = p.next;
    let node2 = p.next.next;
    let next = node2.next;

    node2.next = node1;
    node1.next = next;
    p.next = node2;

    p = node1;
  }
  return dummy.next;
}

var swapPairs = function (head) {
  if (head == null || head.next == null) return head;
  let a = head;
  let b = head.next;
  a.next = swapPairs(b.next);
  b.next = a;
  return b;
};
