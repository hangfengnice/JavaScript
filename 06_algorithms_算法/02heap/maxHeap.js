class MaxHeap {
  constructor() {
    this.data = [];
    this.count = 0;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  insert(item) {
    let { data, count } = this;
    data[count + 1] = item;
    this.count++;
    this.shiftUp(this.count);
  }
  shiftUp(k) {
    let { data } = this;
    while (k > 1 && data[k >> 1] < data[k]) {
      let j = k >> 1;
      [data[k], data[j]] = [data[j], data[k]];
      k = k >> 1;
    }
  }
  shiftDown(k) {
    let { count, data } = this;
    while (2 * k <= count) {
      let j = 2 * k;
      if (j + 1 <= count && data[j + 1] > data[j]) {
        j = j + 1;
      }
      if (data[k] >= data[j]) {
        break;
      }
      [data[k], data[j]] = [data[j], data[k]];
      k = j;
    }
  }
  extractMax() {
    if (!this.count) return;
    let result = this.data[1];
    this.data[1] = this.data.pop();
    this.count--;
    this.shiftDown(1);
    return result;
  }
  print() {
    let n = this.count;
    let max_level = 0;
    let number_per_level = 1;
    let { count, data } = this;

    while (n >= 0) {
      max_level += 1;
      n -= number_per_level;
      number_per_level *= 2;
    }

    let max_level_number = 2 ** (max_level - 1);
    let cur_tree_max_level_number = max_level_number;
    // debugger

    let index = 1;
    for (let level = 0; level < max_level; level++) {
      let line1 = new Array(max_level_number * 3 - 1).fill(" ");
      let cur_level_number = Math.min(count - 2 ** level + 1, 2 ** level);
      for (
        let index_cur_level = 0;
        index_cur_level < cur_level_number;
        index++, index_cur_level++
      ) {
        putNumberInLine(
          data[index],
          line1,
          index_cur_level,
          cur_tree_max_level_number * 3 - 1
        );
      }
      console.log(line1.join(""));
      if (level == max_level - 1) break;

      let line2 = new Array(max_level_number * 3 - 1).fill(" ");
      for (
        let index_cur_level = 0;
        index_cur_level < cur_level_number;
        index_cur_level++
      )
        putBranchInLine(
          line2,
          index_cur_level,
          cur_tree_max_level_number * 3 - 1
        );
      console.log(line2.join(""));
      cur_tree_max_level_number = cur_tree_max_level_number >> 1;
    }
  }
}

function putNumberInLine(num, line, index_cur_level, cur_tree_width) {
  let sub_tree_width = (cur_tree_width - 1) / 2;
  let offset = index_cur_level * (cur_tree_width + 1) + sub_tree_width;
  line[offset] = num;
}

function putBranchInLine(line, index_cur_level, cur_tree_width) {
  let sub_tree_width = (cur_tree_width - 1) / 2;
  let sub_sub_tree_width = (sub_tree_width - 1) / 2;
  let offset_left = index_cur_level * (cur_tree_width + 1) + sub_sub_tree_width;
  let offset_right =
    index_cur_level * (cur_tree_width + 1) +
    sub_tree_width +
    1 +
    sub_sub_tree_width;

  line[offset_left + 1] = "/";
  line[offset_right] = "\\";
}

let heap = new MaxHeap();

for (let i = 0; i < 50; i++) {
  heap.insert(Math.floor(Math.random() * 100));
}
for(let i = 0; i < 50; i ++) {
  console.log(heap.extractMax());
}
