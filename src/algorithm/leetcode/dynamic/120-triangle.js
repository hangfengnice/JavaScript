// var minimumTotal = function (triangle) {
//   let n = triangle.length;
//   let f = Array(n)
//     .fill()
//     .map(() => []);
//   f[0][0] = triangle[0][0];
//   for (let i = 1; i < n; i++) {
//     f[i][0] = f[i - 1][0] + triangle[i][0];
//     for (let j = 1; j < i; j++) {
//       f[i][j] = Math.min(f[i - 1][j - 1], f[i - 1][j]) + triangle[i][j];
//     }
//     f[i][i] = f[i - 1][i - 1] + triangle[i][i];
//   }
//   let minTotal = f[n - 1][0];
//   for (let i = 1; i < n; i++) {
//     minTotal = Math.min(minTotal, f[n - 1][i]);
//   }
//   return minTotal;
// };

// var minimumTotal = function (triangle) {
//   let n =triangle.length
//   let f = Array(2).fill().map(() => [])
//   f[0][0] = triangle[0][0]
//   for(let i = 1; i < n; i ++) {
//     let curr = i % 2
//     let prev = 1 - curr
//     f[curr][0] = f[prev][0] + triangle[i][0]
//     for(let j = 1; j < i; j ++) {
//       f[curr][j] = Math.min(f[prev][j -1], f[prev][j]) + triangle[i][j]
//     }
//     f[curr][i] = f[prev][i - 1] + triangle[i][i]
//   }
//   let minTotal = f[(n - 1) % 2][0]
//   for(let i = 1; i < n; i ++) {
//     minTotal = Math.min(minTotal, f[(n -1) % 2][i])
//   }
//   return minTotal

// }

// var minimumTotal = function (triangle) {
//   let n = triangle.length;
//   let f = Array(n);
//   f[0] = triangle[0][0];
//   for (let i = 1; i < n; i++) {
//     f[i] = f[i - 1] + triangle[i][i];
//     for (let j = i - 1; j > 0; j--) {
//       f[j] = Math.min(f[j - 1], f[j]) + triangle[i][j];
//     }
//     f[0] += triangle[i][0];
//   }
//   let minTotal = f[0];
//   for (let i = 1; i < n; i++) {
//     minTotal = Math.min(minTotal, f[i]);
//   }
//   return minTotal;
// };

// var minimumTotal = function (triangle) {
//   var dp = triangle
//   for(let i = dp.length - 2; i >= 0; i --) {
//     for(let j = 0; j < dp[i].length; j ++) {
//       dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + dp[i][j]
//     }
//   }
//   return dp[0][0]
// }

var minimumTotal = function (triangle) {
  let n = triangle.length;
  var dp = Array(n + 1).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
};

let ret = minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
console.log(ret);
