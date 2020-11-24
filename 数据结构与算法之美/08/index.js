class CircularQueue {
  items = null
  n = 0
  head = 0
  tail = 0
  constructor(capacity) {
    this.items = Array(capacity)
    this.n = capacity
  }

  enqueue(item) {
    if ((this.tail + 1) % n == head) return false
    this.items[this.tail] = item
    this.tail = (this.tail + 1) % this.n
    return true
  }
  dequeue() {
    if (this.head == this.tail) return false
    
    this.head = (this.head + 1) % this.n
    return this.items.shift()

  }
}