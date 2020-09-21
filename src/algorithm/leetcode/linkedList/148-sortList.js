var sortList = function sortList(head) {
  if (head == null || head.next == null) return head;
  let fast = head.next,
    slow = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // [1, 3, 2, 4]

  let tmp = slow.next;
  slow.next = null;

  let left = sortList(head);
  let right = sortList(tmp);

  let h = new ListNode();
  let res = h;
  while (left != null && right != null) {
    if (left.val < right.val) {
      h.next = left;
      left = left.next;
    } else {
      h.next = right;
      right = right.next;
    }
    h = h.next;
  }
  h.next = left ? left : right;
  return res.next;
};

var sortList1 = function sortList(head) {
  let n = 0;
  for (let i = head; i != null; i = i.next) n++;
  let dummy = new ListNode();
  dummy.next = head;

  for (let i = 1; i < n; i = 2 * i) {
    let begin = dummy;
    for (let j = 0; j + i < n; j = j + 2 * i) {
      let first = begin.next,
        second = first;

      for (let k = 0; k < i; k++) second = second.next;
      let f = 0,
        s = 0;
      while (f < i && s < i && second != null) {
        if (first.val < second.val) {
          begin.next = first;
          begin = begin.next;
          first = first.next;
          f++;
        } else {
          begin.next = second;
          begin = begin.next;
          second = second.next;
          s++;
        }
      }
      while (f < i) {
        begin.next = first;
        begin = begin.next;
        first = first.next;
        f++;
      }
      while (s < i && second != null) {
        begin.next = second;
        begin = begin.next;
        second = second.next;
        s++;
      }
      begin.next = second;
    }
  }
  return dummy.next;
};
