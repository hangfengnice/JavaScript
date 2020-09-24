var findMode = function (root) {
  let base = 0,
    count = 0,
    maxCount = 0;

  let answer = [];

  const update = (x) => {
    if (x == base) {
      ++count;
    } else {
      count = 1;
      base = x;
    }
    if (count == maxCount) {
      answer.push(base);
    }
    if (count > maxCount) {
      maxCount = count;
      answer = [base];
    }
  };

  let cur = root,
    pre = null;
  while (cur) {
    if (!cur.left) {
      update(cur.val);
      cur = cur.right;
      continue;
    }
    pre = cur.left;

    while (pre.right && pre.right != cur) {
      pre = pre.right;
    }
    if (!pre.right) {
      pre.right = cur;
      cur = cur.left;
    } else {
      pre.right = null;
      update(cur.val);
      cur = cur.right;
    }
  }
  return answer;
};
