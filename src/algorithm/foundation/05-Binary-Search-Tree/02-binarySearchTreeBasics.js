

class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor(key, value) {
    this.root = new Node(key, value)
  }
  insert(key, value) {
    if(this.root.value > value) {
      this.root.left = new Node(key, value)
    } else if (this.root.vlaue) {}
  }
}
