var insertionSortList = function (head) {
  let arr = [];

  let p = head;
  while (p) {
    arr.push(p.val);
    p = p.next;
  }
  arr.sort((a, b) => a - b);

  p = head;
  let i = 0;
  while (p) {
    p.val = arr[i++];
    p = p.next;
  }
  return head;
};

var insertionSortList1 = function (head) {
  if (head == null || head.next == null) return head;
  let pre = head,
    cur = head.next;
  let dummy = new ListNode();
  dummy.next = head;
  [(1, 3, 2)];
  while (cur != null) {
    if (pre.val < cur.val) {
      pre = cur; // pre = 3, cur = 2, p = 1
      cur = cur.next;
    } else {
      let p = dummy;
      while (p.next != cur && p.next.val < cur.val) {
        p = p.next;
      }
      pre.next = cur.next;
      cur.next = p.next;
      p.next = cur;
      cur = pre.next;
    }
  }
  return dummy.next;
};
