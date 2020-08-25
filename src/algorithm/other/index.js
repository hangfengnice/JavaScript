// // function createQueue() {
// //   const queue = [];
// //   return {
// //     enqueue(item) {
// //       queue.unshift(item);
// //     },
// //     dequeue() {
// //       return queue.pop();
// //     },
// //     peek() {
// //       return queue[queue.length - 1];
// //     },
// //     get length() {
// //       return queue.length;
// //     },
// //     isEmpty() {
// //       return queue.length == 0;
// //     },
// //   };
// // }
// // const q = createQueue();
// // q.enqueue("hello");
// // q.enqueue("world");
// // q.enqueue("hf");
// // // console.log(q.peek());

const { each } = require("jquery");

// // function createPriorityQueue() {
// //   const lowPriorityQueue = createQueue();
// //   const highPriorityQueue = createQueue();
// //   return {
// //     enqueue(item, ishighPriority = false) {
// //       ishighPriority
// //         ? highPriorityQueue.enqueue(item)
// //         : lowPriorityQueue.enqueue(item);
// //     },
// //     dequeue() {
// //       if (!highPriorityQueue.isEmpty()) {
// //         return highPriorityQueue.dequeue();
// //       }
// //       return lowPriorityQueue.dequeue();
// //     },
// //     peek() {
// //       if (!highPriorityQueue.isEmpty()) {
// //         return highPriorityQueue.peek();
// //       }
// //       return lowPriorityQueue.peek();
// //     },
// //     get length() {
// //       return highPriorityQueue.length + lowPriorityQueue.length;
// //     },
// //     isEmpty() {
// //       return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
// //     },
// //   };
// // }

// // function createStack() {
// //   const array = [];
// //   return {
// //     push(item) {
// //       array.push(item);
// //     },
// //     pop() {
// //       return array.pop();
// //     },
// //     peek() {
// //       return array[array.length - 1];
// //     },
// //     get length() {
// //       return array.length;
// //     },
// //     isEmpty() {
// //       return array.length == 0;
// //     },
// //   };
// // }

// // const lowerBodyStack = createStack();
// // lowerBodyStack.push("hf");
// // lowerBodyStack.push("yew");
// // // console.log(lowerBodyStack.peek());

// // // function createNode(value) {
// // //   return {
// // //     value,
// // //     next: null
// // //   }
// // // }

// // // function createLinkList() {
// // //   return {
// // //     head: null,
// // //     tail: null,
// // //     length: 0,
// // //     push(value) {
// // //       const node = createNode(value)
// // //       if (this.head == null) {
// // //         this.head = node
// // //         this.tail = node
// // //         this.length ++
// // //         return node
// // //       }
// // //       this.tail.next = node
// // //       this.tail = node
// // //       this.length ++
// // //       return node
// // //     },
// // //     pop() {
// // //       if (this.isEmtpy()) {
// // //         return null
// // //       }
// // //       const node = this.tail
// // //       if (this.tail == this.head) {
// // //         this.head = null
// // //         this.tail = null
// // //         this.length --
// // //         return node
// // //       }
// // //       let current = this.head
// // //       let penultimate
// // //       while (current) {
// // //         if (current.next == this.tail) {
// // //           penultimate = current
// // //           break
// // //         }
// // //         current = current.next
// // //       }
// // //       penultimate.next = null
// // //       this.tail = penultimate
// // //       this.length --
// // //       return node
// // //     },
// // //     get(index) {
// // //       if (index < 0 || index > this.length) {
// // //         return null
// // //       }
// // //       if (index == 0) return this.head

// // //       let current = this.head
// // //       let i = 0
// // //       while(i < index) {
// // //         i ++
// // //         current = current.next
// // //       }
// // //       return current

// // //     },
// // //     delete(index) {
// // //       if (index < 0 || index > this.length) return null
// // //       if (index == 0) {
// // //         let deleted = this.head
// // //         this.head = this.head.next
// // //         this.length --
// // //         return deleted
// // //       }
// // //       let current = this.head
// // //       let prev
// // //       let i = 0
// // //       while(i < index) {
// // //         i ++
// // //         prev = current
// // //         current = current.next
// // //       }
// // //       const deleted = current
// // //       prev.next = prev.next.next
// // //       this.length --
// // //       return deleted
// // //     },
// // //     isEmtpy() {
// // //       return this.length == 0
// // //     },
// // //     print() {
// // //       const values = []
// // //       let current = this.head
// // //       while(current) {
// // //         values.push(current.value)
// // //         current = current.next
// // //       }
// // //       return values.join(' => ')
// // //     }
// // //   }
// // // }

// // // const list = createLinkList()
// // // const values = ['a', 'b', 'c', 'd', 'e']
// // // const nodes = values.map(i => list.push(i))

// // // // console.log(list.isEmtpy());
// // // // console.log(list.get(1));
// // // console.log(list.delete(1));
// // // console.log(list.print());

// // function createNode(key) {
// //   const neighbors = [];
// //   return {
// //     key,
// //     neighbors,
// //     addNeighbor(node) {
// //       neighbors.push(node);
// //     },
// //   };
// // }

// // function createGraph(directed = false) {
// //   const nodes = [];
// //   const edges = [];
// //   return {
// //     directed,
// //     nodes,
// //     edges,
// //     addNode(key) {
// //       nodes.push(createNode(key));
// //     },
// //     getNode(key) {
// //       return nodes.find((node) => node.key == key);
// //     },
// //     addEdge(node1key, node2key) {
// //       const node1 = this.getNode(node1key);
// //       const node2 = this.getNode(node2key);

// //       node1.addNeighbor(node2);
// //       edges.push(`${node1key}-${node2key}`);
// //       if (!directed) {
// //         node2.addNeighbor(node1);
// //       }
// //     },
// //     print() {
// //       return nodes
// //         .map(({ key, neighbors }) => {
// //           let result = key;
// //           if (neighbors.length) {
// //             result += ` => ${neighbors
// //               .map((neighbors) => neighbors.key)
// //               .join(" ")}`;
// //           }
// //           return result;
// //         })
// //         .join("\n");
// //     },
// //     breadthFirstSearch(startingNodeKey, visitFn) {
// //       const startNode = this.getNode(startingNodeKey);

// //       const visited = nodes.reduce((acc, node) => {
// //         acc[node.key] = false;
// //         return acc;
// //       }, {});
// //       const queue = createQueue();
// //       queue.enqueue(startNode);

// //       while (!queue.isEmpty()) {
// //         const currentNode = queue.dequeue();
// //         if (!visited[currentNode.key]) {
// //           visitFn(currentNode);
// //           visited[currentNode.key] = true;
// //         }

// //         currentNode.neighbors.forEach((node) => {
// //           if (!visited[node.key]) {
// //             queue.enqueue(node);
// //           }
// //         });
// //       }
// //     },
// //     depthFirstSearch(startingNodeKey, visitFn) {
// //       const startNode = this.getNode(startingNodeKey)
// //       const visited = nodes.reduce((acc, node) => {
// //         acc[node.key] = false;
// //         return acc;
// //       }, {});

// //       function explore(node) {
// //         // console.log(node);
// //         if (visited[node.key]) return
// //         visitFn(node.key)
// //         visited[node.key] = true
// //         node.neighbors.forEach(node => {
// //           explore(node)
// //         })
// //       }
// //       explore(startNode)
// //     }
// //   };
// // }

// // // const graph = createGraph(true)
// // // graph.addNode('Kyle')
// // // graph.addNode('Anna')
// // // graph.addNode('Krios')
// // // graph.addNode('Tali')

// // // graph.addEdge('Kyle', 'Anna')
// // // graph.addEdge('Anna', 'Kyle')
// // // graph.addEdge('Kyle', 'Krios')
// // // graph.addEdge('Kyle', 'Tali')
// // // graph.addEdge('Anna', 'Krios')
// // // graph.addEdge('Anna', 'Tali')

// // // graph.addEdge('Krios', 'Anna')
// // // graph.addEdge('Tali', 'Kyle')

// // // console.log(graph.print());

// // const graph = createGraph(true);
// // const nodes = ["a", "b", "c", "d", "e", "f"];
// // const edges = [
// //   ["a", "b"],
// //   ["a", "e"],
// //   ["a", "f"],
// //   ["b", "d"],
// //   ["b", "e"],
// //   ["c", "b"],
// //   ["d", "c"],
// //   ["d", "e"],
// // ];

// // nodes.forEach((node) => graph.addNode(node));
// // edges.forEach((nodes) => graph.addEdge(...nodes));

// // // graph.breadthFirstSearch("a", (node) => {
// // //   console.log(node.key);
// // // });
// // // graph.depthFirstSearch('a', (node) => {
// // //   console.log(node);
// // // })

// function createNode(key) {
//   const children = []
//   return {
//     key,
//     children,
//     addChild(childKey) {
//       const childNode = createNode(childKey)
//       children.push(childNode)
//       return childNode
//     }
//   }
// }

// function createTree(rootKey) {
//   const root = createNode(rootKey)
//   return {
//     root,
//     print() {
//       let result = ''
//       function traverse(node, vistiFn, depth) {
//         vistiFn(node, depth)
//         if (node.children.length) {
//           node.children.forEach(child => {
//             traverse(child, vistiFn, depth + 1)
//           })
//         }
//       }
//       function addKeyToResult(node, depth) {
//         result += result.length == 0 ?
//         node.key : `\n${' '.repeat(depth * 2)}${node.key}`
//       }
//       traverse(root, addKeyToResult, 1)
//       return result
//     }
//   }
// }

// const dom = createTree('html')
// const head = dom.root.addChild('head')
// const body = dom.root.addChild('body')
// const title = head.addChild('title egghead Treeleason')
// const header = body.addChild('header')
// const main = body.addChild('main')
// const footer = body.addChild('footer')

// const h1 = header.addChild('h1 - Tree lesson')
// const p = main.addChild('p - learn about trees')

// // const copyright = footer.addChild(`Copyright ${new Date().getFullYear()}`)

// // console.log(dom.print());

// function bubbleSort(array) {
//   let swapped = false;
//   do {
//     swapped = false;
//     array.forEach((item, index) => {
//       printArray(array);
//       if (item > array[index + 1]) {
//         const temp = item;
//         array[index] = array[index + 1];
//         array[index + 1] = temp;
//         swapped = true;
//       }
//     });
//   } while (swapped);
//   return array;
// }
// function printArray(arr) {
//   console.log(arr.join(" => "));
// }

// let nums = [6, 4, 3, 5, 1, 2];
// bubbleSort(nums);

// function merge(nums) {
//   if (nums.length < 2) return nums;
//   let mid = Math.floor(nums.length / 2);
//   let left = nums.slice(0, mid);
//   let right = nums.slice(mid);
//   return mergeArr(left, right);
// }
// function mergeArr(left, right) {
//   let ret = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       ret.push(left.shift());
//     } else {
//       ret.push(right.shift());
//     }
//   }
//   return [...ret, ...left, ...right];
// }
const
