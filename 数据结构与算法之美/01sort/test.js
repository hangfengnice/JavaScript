var sortList = function (head) {
  return toSortList(head, null);

  function toSortList(head, tail) {
    if (!head) {
      return head;
    }
    if ((head.next = tail)) {
      head.next = null;
      return head;
    }
    let slow = head,
      fast = head;
    while (fast !== tail) {
      slow = slow.next;
      fast = fast.next;
      if (fast !== tail) {
        fast = fast.next;
      }
    }
    const mid = slow;
    return merge(toSortList(head, mid), toSortList(mid, tail));
  }
  function merge(head1, head2) {
    let dummy = new ListNode();

    while (head1 && head2) {
      if (head1.val < head2.val) {
        dummy.next = head1;
        head1 = head1.next;
      } else {
        dummy.next = head2;
        head2 = head2.next;
      }
      dummy = dummy.next;
    }
    if (head1) dummy.next = head1;
    if (head2) dummy.next = head2;
    return dummy.next;
  }
};
