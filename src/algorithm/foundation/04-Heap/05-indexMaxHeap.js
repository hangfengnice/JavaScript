const { swap } = require("./helper");

class MaxHeep {
  constructor() {
    this.data = [];
    this.indexes = []
    this.count = 0;
  }
  size() {
    return this.count;
  }

  empty() {
    return this.count == 0;
  }

  insert(i, item) {
    i += 1
    this.data[i] = item;
    this.indexes[this.count + 1] = i
    this.count++;
    this.shiftUp(this.count);
  }
  shiftUp(k) {
    while (k > 1 && this.data[this.indexes[Math.floor(k / 2)]] < this.data[this.indexes[k]]) {
      swap(this.data, this.indexes[Math.floor(k / 2)], this.indexes[k]);
      k = Math.floor(k / 2);
    }
  }
  shiftDown(k) {
    while(2 * k <= this.count) {
      let j = 2 * k
      if (j + 1 <= this.count && this.data[this.indexes[j + 1]] > this.data[this.indexes[j]]) {
        j += 1
      }
      if (this.data[this.indexes[k]] >= this.data[this.indexes[j]]) {
        break
      }
      swap(this.data, this.indexes[k], this.indexes[j])
      k = j
    }
  }
  extractMax() {
    let ret = this.data[this.indexes[1]]
    swap(this.data, this.indexes[1], this.indexes[this.count])
    this.count --
    this.shiftDown(1)
    return ret
  }
  testPrint() {
    let n = this.size();
    let max_level = 0;
    let number_per_level = 1;
    while (n > 0) {
      max_level += 1;
      n -= number_per_level;
      number_per_level *= 2;
    }

    let max_level_number = Math.floor(Math.pow(2, max_level - 1));
    let cur_tree_max_level_number = max_level_number;
    let index = 1;
    for (let level = 0; level < max_level; level++) {
      let line1 = Array(max_level_number * 3 - 1).fill(" ");

      let cur_level_number = Math.min(
        this.size() - Math.floor(Math.pow(2, level)) + 1,
        Math.floor(Math.pow(2, level))
      );
      let isLeft = true;
      for (
        let index_cur_level = 0;
        index_cur_level < cur_level_number;
        index++, index_cur_level++
      ) {
        this.putNumberInLine(
          this.data[index],
          line1,
          index_cur_level,
          cur_tree_max_level_number * 3 - 1,
          isLeft
        );
        isLeft = !isLeft;
      }
      console.log(line1.join(""));
      if (level == max_level - 1) break;

      let line2 = Array(max_level_number * 3 - 1).fill(" ");
      for (
        let index_cur_level = 0;
        index_cur_level < cur_level_number;
        index_cur_level++
      )
        this.putBranchInLine(
          line2,
          index_cur_level,
          cur_tree_max_level_number * 3 - 1
        );
      console.log(line2.join(""));
      cur_tree_max_level_number /= 2;
    }
  }
  putNumberInLine(num, line, index_cur_level, cur_tree_width, isLeft) {
    let sub_tree_width = (cur_tree_width - 1) / 2;
    let offset = index_cur_level * (cur_tree_width + 1) + sub_tree_width;
    line.splice(offset, 1, num);
  }
  putBranchInLine(line, index_cur_level, cur_tree_width) {
    let sub_tree_width = (cur_tree_width - 1) / 2;
    let sub_sub_tree_width = (sub_tree_width - 1) / 2;
    let offset_left =
      index_cur_level * (cur_tree_width + 1) + sub_sub_tree_width;

    let offset_right =
      index_cur_level * (cur_tree_width + 1) +
      sub_tree_width +
      1 +
      sub_sub_tree_width;
    line.splice(offset_left, 1, "/");
    line.splice(offset_right, 1, "\\");
  }
}

module.exports = {
  MaxHeep
}
