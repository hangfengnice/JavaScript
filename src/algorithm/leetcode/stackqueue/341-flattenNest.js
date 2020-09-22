var NestedIterator = function (nestedList) {
  this.num = null;
  this.flag = false;
  this.stack = [];
  this.stack.push(nestedList);
};
NestedIterator.prototype.next = function () {
  this.flag = false;
  return this.num;
};
NestedIterator.prototype.hasNext = function () {
  if (!this.stack.length) return false;
  while (this.stack.length && !this.flag) {
    let temp = this.stack[this.stack.length - 1];
    if (temp.length) {
      let tt = temp.shift();
      if (tt.isInteger()) {
        this.num = tt.getInteger();
        this.flag = true;
      } else this.stack.push(tt.getList());
    } else {
      this.stack.pop();
    }
  }
  return this.flag;
};
