// var findUnsortedSubarray = function (nums) {
//   let res = nums.legnth
//   for(let i = 0; i < nums.legnth; i ++) {
//     for(let j = i; j < nums.legnth; j ++) {
//       let min = Number.MAX_SAFE_INTEGER, min = Number.MIN_SAFE_INTEGER, prev = Number.MIN_VALUE
//       for(let k = i; k < j; k ++) {

//       }
//     }
//   }
// }
var findUnsortedSubarray = function (nums) {
  let sortNums = [...nums].sort((a, b) => a - b)
  let l, r, len = nums.length
  for(let i = 0; i < len; i ++) {
    if (sortNums[i] !== nums[i] && isNaN(l)) l = i
    if (sortNums[len - 1 - i] !== nums[len - 1 - i] && isNaN(r)) r = len - i - 1
  }
  console.log(r, l);
  return r - l + 1 || 0
}
let nums = [2,6,4,8,10,9,15]
let result = findUnsortedSubarray(nums)
console.log(result);
