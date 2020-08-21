// var integerBreak = function (n) {
//   let meno = [];
//   return dfs(n);
//   function dfs(n) {
//     if (meno[n]) return meno[n];
//     let res = 0;
//     for (let i = 1; i < n; i++) {
//       res = Math.max(res, i * (n - i), i * dfs(n - i));
//     }
//     return (meno[n] = res);
//   }
// };

var integerBreak = function (n) {
  let meno = Array(n + 1).fill(-1)
  meno[1] = 1
  for(let i = 2; i <= n; i ++) {
    for(let j = 1; j <= i - 1; j ++) {
      meno[i] = Math.max(meno[i], j * (i - j), j * meno[i - j])
    }
  }
  return meno[n]
}

let ret = integerBreak(16);
console.log(ret);
