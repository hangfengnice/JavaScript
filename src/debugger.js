

var rotate = function(nums, k) {
  return (nums = [...nums.slice(k + 1), ...nums.slice(0, k + 1)])
};

let ret = rotate([1,2,3,4,5,6,7], 3)

console.log(ret);


var rotate = function (nums, k) {
  let n = k % nums.length
  if (!n) return nums
  for(let i = 0; i < n; i ++) {
    nums.unshift(nums.pop())
  }
}
