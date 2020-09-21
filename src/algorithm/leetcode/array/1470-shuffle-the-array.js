var shuffle = function (nums, n) {
  let ret = [], j = 0, start = n
  for(let i = 0; i < n; i ++) {
    ret.push(nums[i], nums[start ++])
  }
  return ret
}

let nums = [2,5,1,3,4,7], n = 3;
let result = shuffle(nums, n)
console.log(result);
