class MaxHeap {
  constructor(opacity) {
    this.data = new Array(opacity + 1);
    this.count = 0;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count == 0;
  }
  insert(item) {
    this.data[this.count + 1] = item;
    this.count++;
    this.shiftUp(this.count);
  }
  shiftUp(k) {
    while (k > 1 && this.data[Math.floor(k / 2)] < this.data[k]) {
      swap(this.data, Math.floor(k / 2), k);
      k = Math.floor(k / 2);
    }
  }
  testPrint() {
    if (this.size() >= 100) {
      console.log("超过100个数字了");
      return;
    }
    console.log("The max heap size is: ", this.size());
    for (let i = 1; i < this.size(); i++) {
      console.log(this.data[i], ' ');
    }
    let n = this.size();
    let max_level = 0;
    let number_per_level = 1;
    while (n > 0) {
      max_level += 1;
      n -= number_per_level;
      number_per_level *= 2;
    }
    let max_level_number = Math.pow(2, max_level - 1);
    let cur_tree_max_level_number = max_level_number;
    let index = 1;
    for (let level = 0; level < max_level; level++) {
      let line1 = " ".repeat(max_level_number * 3 - 1);
      let cur_level_number = Math.min(
        Math.pow(2, level) + 1,
        Math.pow(2, level)
      );
      let isLeft = true;
      for (
        let index_cur_level = 0;
        index_cur_level < cur_level_number;
        index++, index_cur_level++
      ) {
        putNumberInLine(
          this.data[index],
          line1,
          index_cur_level,
          cur_tree_max_level_number * 3 - 1,
          isLeft
        );
        isLeft = !isLeft;

        if (level == max_level - 1) break;
        let line2 = " ".repeat(max_level_number * 3 - 1);
        for (
          let index_cur_level = 0;
          index_cur_level < cur_level_number;
          index_cur_level++
        ) {
          putBranchInLine(
            line2,
            index_cur_level,
            cur_tree_max_level_number * 3 - 1
          );
        }
        console.log(line2);
        cur_tree_max_level_number /= 2;
      }
    }
  }
}
function putNumberInLine(num, line, index_cur_level, cur_tree_width, isLeft) {
  let sub_tree_width = (cur_tree_width - 1) / 2;
  let offset = index_cur_level * (cur_tree_width + 1) + sub_tree_width;
  // assert(offset + 1 < line.size());
  if (num >= 10) {
    line[offset + 0] = "0" + num / 10;
    line[offset + 1] = "0" + (num % 10);
  } else {
    if (isLeft) line[offset + 0] = "0" + num;
    else line[offset + 1] = "0" + num;
  }
}

function putBranchInLine(line, index_cur_level, cur_tree_width) {
  let sub_tree_width = (cur_tree_width - 1) / 2;
  let sub_sub_tree_width = (sub_tree_width - 1) / 2;
  let offset_left = index_cur_level * (cur_tree_width + 1) + sub_sub_tree_width;
  // assert( offset_left + 1 < line.size() );
  let offset_right =
    index_cur_level * (cur_tree_width + 1) +
    sub_tree_width +
    1 +
    sub_sub_tree_width;
  // assert( offset_right < line.size() );

  line[offset_left + 1] = "/";
  line[offset_right + 0] = "\\";
}
function swap(arr, i, k) {
  [arr[i], arr[k]] = [arr[k], arr[i]];
}
let maxheap = new MaxHeap(100);

for (let i = 0; i < 15; i++) {
  maxheap.insert(Math.floor(Math.random() * 100));
}
// console.log(maxheap.size(), maxheap.data);

// console.log(maxheap.testPrint());


function frankenSplice(arr1, arr2, n) {
  let arr = [...arr2];
  arr.splice(n, 0, ...arr1);
  return arr
}

// let ret = frankenSplice([1, 2, 3], [4, 5, 6], 1);
// console.log(ret);

// 1 基础
// 2 设计模式
// 3 算法
// 4 vue

