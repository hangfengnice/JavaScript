function reorderList(head) {
  if (!head) return null;
  let list = [];
  while (head != null) {
    list.push(head);
    head = head.next;
  }
  let i = 0,
    j = list.length - 1;
  while (i < j) {
    list[i].next = list[j];
    i++;
    if (i == j) {
      break;
    }
    list[j].next = list[i];
    j--;
  }
  list[i].next = null;
}
