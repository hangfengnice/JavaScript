function reverseK(head, k) {
  let hair = new ListNode();
  hair.next = head;
  let pre = hair;

  while (head) {
    let tail = pre;
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) return hair.next;
    }
    const nex = tail.next;

    [head, tail] = myReverse(head, tail);
    pre.next = head;
    tail.next = nex;
    pre = tail;
    head = tail.next;
  }
  return hair.next;

  function myReverse(head, tail) {
    let prev = tail.next;
    let p = head;
    while (prev != tail) {
      const nex = p.next;
      p.next = prev;
      prev = p;
      p = nex;
    }
    return [tail, head];
  }
}

var reverseKGroup = function (head, k) {
  let cur = head;
  let count = 0;
  while (cur != null && count != k) {
    cur = cur.next;
    count++;
  }

  if (count == k) {
    cur = reverseKGroup(cur, k);
    while (count) {
      count--;
      let tmp = head.next;
      head.next = cur;
      cur = head;
      head = tmp;
    }
    head = cur;
  }
  return head;
};

var reverseKGroup = function (head, k) {
  let stack = [];
  let preHead = new ListNode();
  let pre = preHead;

  while (true) {
    let count = 0;
    let tmp = head;
    while (tmp && count < k) {
      stack.push(tmp);
      tmp = tmp.next;
      count++;
    }
    if (count != k) {
      pre.next = head;
      break;
    }
    while (stack.length) {
      pre.next = stack.pop();
      pre = pre.next;
    }
    pre.next = tmp;
    head = tmp;
  }
  return preHead.next;
};
