const temperatures = [73, 74, 75, 69, 72, 76, 73]

const dailyTemperatures = function (T) {
  const len = T.length
  const stack = []
  const res = new Array(len).fill(0)
  for (let i = 0; i < len; i ++) {
    while(stack.length && T[i] > T[stack[stack.length - 1]]) {
      const top = stack.pop()
      res[top] = i - top
    }
    stack.push(i)
  }
  return res
}

let ret = dailyTemperatures(temperatures)
// console.log(ret);

const MinStack = function () {
  this.stack = []
  this.stack2 = []
}

MinStack.prototype.push = function (x) {
  this.stack.push(x)
  if (this.stack2.length == 0 || this.stack2[this.stack2.length - 1] >= x) {
    this.stack2.push(x)
  }
}

MinStack.prototype.pop = function () {
  this.stack.pop()
}

MinStack.prototype.top = function () {
  if (!this.stack || !this.stack.length) {
    return
  }
  return this.stack[this.stack.length - 1]
}

MinStack.prototype.getMin = function () {
  let minVal = Infinity
  const {stack} = this
  for (let i = 0; i < stack.length; i ++) {
    if (stack[i] < minVal) {
      minVal = stack[i]
    }
  }
  return minVal
}


const MyQueue = function () {
  this.stack1 = []
  this.stack2 = []
}

MyQueue.prototype.push = function (x) {
  this.stack1.push(x)
}

MyQueue.prototype.pop = function () {

}

// const maxSlidingWindow = function (nums, k) {
//   const len = nums.length
//   const res = []
//   let left = 0
//   let right = k - 1
//   while(right < len) {
//     const max = calMax(nums, left, right)
//     res.push(max)
//     left ++
//     right ++
//   }
//   return res
// }

// function calMax(arr, left, right) {
//   if (!arr || !arr.length) return
//   let maxNum = arr[left]
//   for (let i = left; i <= right; i ++) {
//     if (arr[i] > maxNUm) {
//       maxNum = arr[i]
//     }
//   }
//   return maxNum
// }

const maxSlidingWindow = function (nums, k) {
  const len = nums.length
  const res = []
  const deque = []
  for (let i = 0; i < len; i ++) {
    // while(deque.length)
  }
}
