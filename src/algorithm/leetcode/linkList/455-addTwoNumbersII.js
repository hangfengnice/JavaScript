function addTwoNums(l1, l2) {
  let s1 = [],
    s2 = [];
  while (l1 != null) {
    s1.push(l1.val);
    l1 = l1.next;
  }
  while (l2 != null) {
    s2.push(l2.val);
    l2 = l2.next;
  }
  let carry = 0,
    ans = null;
  while (s1.length || s2.length) {
    let a = s1.length ? s1.pop() : 0;
    let b = s2.length ? s2.pop() : 0;
    let sum = a + b + carry;
    carry = Math.floor(sum / 10);
    let cur = new ListNode(sum % 10);
    cur.next = ans;
    ans = cur;
  }
  if (carry > 0) {
    let cur = new ListNode(carry);
    cur.next = ans;
    ans = cur;
  }
  return ans;
}
