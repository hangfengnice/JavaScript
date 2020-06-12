// const merge = function (nums1, m, nums2, n) {
//   let i = m - 1, j = n - 1, k = m + n - 1
//   while (i >= 0 && j >= 0) {
//     if (nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i]
//       i --
//       k --
//     } else {
//       nums1[k] = nums2[j]
//         j --
//         k --
//     }
//   }
//   while(j >= 0) {
//     nums1[k] = nums[j]
//     j --
//     k --
//   }
// }
// let arr1 = [1, 2, 3, 4]
// let arr2 = [3, 4, 8]
// merge(arr1, arr1.length, arr2, arr2.length)
// console.log(arr1);



// const validPalindrome = function (s) {
//   const len = s.length
//   let i = 0, j = len - 1
//   while(i < j && s[i] == s[j]) {
//     i ++
//     j --
//   }
//   if (isPalindrome(i + 1, j)) {
//     return true
//   }
//   if (isPalindrome(i, j - 1)) {
//     return true
//   }

//   function isPalindrome(st, ed) {
//     while(st < ed) {
//       if (s[st] != s[ed]) {
//         return false
//       }
//       st ++
//       ed --
//     }
//     return true
//   }
//   return false

// }

// let ret = validPalindrome('ssss')
// console.log(ret);


const WordDictionary = function () {
  this.words = {}
}
WordDictionary.prototype.addWord = function (word) {
  if (this.words[word.length]) {
    this.words[word.length].push(word)
  } else {
    this.words[word.length] = [word]
  }
}
WordDictionary.prototype.search = function (word) {
  if (!this.words[word.length]) {
    return false
  }
  const len = word.length
  if (!word.includes('.')) {
    return this.words[len].includes(word)
  }
  const reg = new RegExp(word)
  return this.words[len].some(item => reg.test(item))
}

// const max = Math.pow(2, 31) - 1
// console.log(max);
// const min = -max - 1
// console.log(min);
// console.log(+'-1');

const reverseBetween = function (head, m, n) {
  let pre, cur, lefthead
  const dummy = new ListNode()
  dummy.next = head
  let p = dummy
  for (let i = 0; i < m - 1; i ++) {
    p = p.next
  }
  lefthead = p
  let start = lefthead.next
  pre = start
  cur = pre.next
  for (let i = m; i < n; i++) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  lefthead.next = pre
  start.next = cur
  return dummy.next
}
