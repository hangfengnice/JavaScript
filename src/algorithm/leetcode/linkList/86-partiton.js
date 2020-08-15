function partition(head, x) {
  let b = new NodeList(),
    l = b;
  let a = new NodeList(),
    r = a;
  while (head != null) {
    if (head.val < x) {
      l.next = head;
      l = l.next;
    } else {
      r.next = head;
      r = r.next;
    }
    head = head.next;
  }
  r.next = null;
  l.next = a.next;
  return b.next;
}
