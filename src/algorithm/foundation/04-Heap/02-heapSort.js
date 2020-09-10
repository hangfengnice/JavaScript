const {MaxHeep} = require('./01-maxHeap')
const {MaxHeepHeapify} = require('./03-heapify')
var heapSort1 = function (arr) {
  let maxheap = new MaxHeep()
  for(let i = 0; i < arr.length; i ++) {
    maxheap.shiftUp(arr[i])
  }

  for(let i = arr.length - 1; i >= 0; i --) {
    arr[i] = maxheap.extractMax()
  }
}

var heapSort2 = function (arr) {
  let n = arr.length
  let maxheap = new MaxHeepHeapify(arr, n)
  for(let i = n - 1; i >= 0; i --) {
    arr[i] = maxheap.extractMax()
  }
}

module.exports = {
  heapSort1,
  heapSort2
}
