// function binary_serach(arr, key) {
//   let low = 0, high = arr.length - 1
//   while(low <= high) {
//     let mid = parseInt(low + (high - low) / 2)
//     if (key === arr[mid]) {
//       return mid
//     } else if (key < arr[mid]) {
//       high = mid - 1
//     } else if (key > arr[mid]) {
//       low = mid + 1
//     } else {
//       return -1
//     }
//   }
// }

// let arr = [1,2,3,4,5,6,7,8,6]

// console.log(binary_serach(arr, 5))


// for (var i = 0; i < 5; i ++) {
//   setTimeout(function (i) {
//     console.log(i)
//   }, 1000, i)
// }


// const isPalindromicB = w => {
//   let len = w.length;
//   let mid = Math.floor(len / 2) | 0;
//   while (mid) {
//     if (w[mid] !== w[len - mid - 1]) {
//       return false;
//     }
//     mid--;
//   }
//   return true
// };

// console.log(isPalindromicB("123432"));

// const delay = time => new Promise(resolve => {
//   setTimeout(resolve, time)
// })

// let testRun =  async () => {
//   console.log(1)
//   await delay(2000)
//   console.log('hello')
// }

// testRun()


const a = [1,2,3,4,5]

Array.prototype.multiply = function () {
  console.log(this);
  let arr1 = this.map(item => item * item)
  return [...this, ...arr1]
}

console.log(a.multiply());

console.log(0.2 + 0.1);