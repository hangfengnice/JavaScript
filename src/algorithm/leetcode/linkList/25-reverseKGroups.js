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
