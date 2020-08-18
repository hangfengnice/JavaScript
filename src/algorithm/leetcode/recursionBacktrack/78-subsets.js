// function subset(nums) {
//   let ret = [];
//   dfs([], 0);
//   return ret;
//   function dfs(temp, start) {
//     ret.push(temp.slice());
//     for (let i = start; i < nums.length; i++) {
//       temp.push(nums[i]);
//       dfs(temp.slice(), i + 1);
//       temp.pop();
//     }
//   }
// }

function subset(nums) {
  return nums.reduce(
    (total, num) => total.concat(total.map((item) => item.concat(num))),
    [[]]
  );
}
