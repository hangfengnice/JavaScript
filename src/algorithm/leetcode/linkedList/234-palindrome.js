function palindrome(head) {
  let list = [],
    h = head;
  while (h) {
    list.push(h);
    h = h.next;
  }
  let l = 0,
    r = list.length - 1;
  while (l < r) {
    if (list[l].val != list[r].val) return false;
    l++;
    r--;
  }
  return true;
}
