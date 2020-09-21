var deleteNthNode = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;
  // [1, 2,3 ,4,5] 2
  while (n) {
    fast = fast.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};

// [1, 2, 3] 1
var rotateRight = function (head, k) {
  let fast = head;
  let slow = head;

  while (k--) {
    if (fast && fast.next) fast = fast.next;
    else fast = head;
  }
  if (fast == head) return head;
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  fast.next = head;
  head = slow.next;
  slow.next = null;
  return head;
};
