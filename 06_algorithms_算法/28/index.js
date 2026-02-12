class Heap {
  constructor(capacity) {
    this.a = Array(capacity + 1)
    this.n = capacity
    this.count = 0
  }

  insert(data) {
    if (this.count > this.n) return
    this.count ++
    this.a[this.count] = data
    let i = this.count
    while((i >> 1) > 0 && this.a[i] > this.a[i >> 1]) {
      swap(this.a, i, i >> 1)
      i = i >> 1
    }
  }

  removeMax() {
    if (this.count == 0) return -1
    this.a[1] = this.a[this.count]
    delete this.a[this.count]
    this.count --
    this.heapify(this.a, this.count, 1)
  }
  heapify(a, n, i) {
    while(true) {
      let maxPos = i
      if (i * 2 <= n && a[i] < a[i * 2]) maxPos = i * 2
      if (i * 2 + 1 <= n && a[maxPos] < a[i * 2 + 1]) maxPos = i * 2 + 1
      if (maxPos == i) break

      swap(a, i, maxPos)
      i = maxPos
    }
  }
}

function swap(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}



let heap = new Heap(10)
heap.insert(3)
heap.insert(4)
heap.insert(2)
heap.insert(6)
heap.removeMax()
console.log(heap);

class Down{
  // 向下堆化
  buildHeap (a, n) {
    for(let i = n >> 1; i >= 1; i --) {
      heapify(a, n, i)
    }
  }
  heapify(a, n, i) {
    while(true) {
      
    }
  }
}