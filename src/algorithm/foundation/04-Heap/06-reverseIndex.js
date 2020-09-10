// const { swap } = require("./helper");

function swap(arr, l, r) {
  [arr[l], arr[r]] = [arr[r], arr[l]]
}

class IndexMaxHeep {
  constructor(n) {
    this.data = [];
    this.indexes = []
    this.reverse = Array(n + 1).fill(0)
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
    this.reverse[i] = this.count + 1
    this.count++;
    this.shiftUp(this.count);
  }
  shiftUp(k) {
    while (k > 1 && this.data[this.indexes[Math.floor(k / 2)]] < this.data[this.indexes[k]]) {
      swap(this.indexes, this.indexes[Math.floor(k / 2)], this.indexes[k]);
      this.reverse[this.indexes[~~(k / 2)]] = ~~(k / 2)
      this.reverse[this.indexes[k]] = k
      k = ~~(k / 2);
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
      swap(this.indexes, this.indexes[k], this.indexes[j])
      this.reverse[this.indexes[k]] = k
      this.reverse[this.indexes[j]] = j
      k = j
    }
  }
  extractMax() {
    let ret = this.data[this.indexes[1]]
    swap(this.indexes, this.indexes[1], this.indexes[this.count])
    this.reverse[this.indexes[1]] = 1
    this.reverse[this.indexes[this.count]] = 0
    this.count --
    this.shiftDown(1)
    return ret
  }
  extractMaxIndex() {
    let ret = this.indexes[1] - 1
    swap(this.indexes, this.indexes[1], this.indexes[this.count])
    this.reverse[this.indexes[1]] = 1
    this.reverse[this.indexes[this.count]] = 0
    this.count --
    this.shiftDown(1)
    return ret
  }
  getItem(i) {
    return this.data[i + 1]
  }
  change(i, item) {
    i += 1
    this.data[i] = item
    // for(let j = 1; j <= this.count; j ++) {
    //   if (this.indexes[j] == i) {
    //     this.shiftUp(j)
    //     this.shiftDown(j)
    //     return
    //   }
    // }
    let j = this.reverse[i]

    this.shiftDown(j)
    this.shiftUp(j)
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

let indexmaxheep = new IndexMaxHeep(10)


let arr = [15,
  7,
  18,
  3,
  13,
  19,
  18]

  for(let i = 0; i < arr.length; i ++) {
    debugger
    indexmaxheep.insert(i, arr[i])
  }
// for(let i = 0; i < 7; i ++) {
//   let randon = ~~(Math.random() * 20)
//   console.log(randon);
//   indexmaxheep.insert(i, randon)
// }

console.log(indexmaxheep.indexes);
console.log(indexmaxheep.data);
console.log(indexmaxheep.reverse);

// module.exports = {
//   IndexMaxHeep
// }
