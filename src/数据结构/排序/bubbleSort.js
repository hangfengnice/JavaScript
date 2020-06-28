const {swap} = require('./sortTestHelper')

// const bubbleSort = (arr, n = arr.length) => {
//   let swapped
//   do {
//     swapped = false
//     for (let i = 1; i < n; i ++) {
//       if (arr[i] < arr[i - 1]) {
//         swap(arr, i, i - 1)
//         swapped = true
//       }
//     }
//     n --
//   } while(swapped);
// }

const bubbleSort = (arr, n = arr.length) => {
  let newn

  do {
    newn = 0
    for (let i = 1; i < n; i ++) {
      if (arr[i] < arr[i - 1]) {
        swap(arr, i, i - 1)
        newn = i
      }
    }
    n = newn
  } while(newn > 0)
}

module.exports = {
  bubbleSort
}
