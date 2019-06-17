// 求0-100的质数

// var count = 0;
// for (var i = 0; i < 100; i++) {
//   for (var j = 1; j <= i; j++) {
//     if (i % j == 0) {
//       count++;
//     }
//   }
//   if (count == 2) {
//     console.log(i);
//   }
//   count = 0; // 重新赋值0
// }

//代码小优化
var count = 0;
for (var i = 0; i < 100; i++) {
  if (i == 1 || i == 0) {
    continue;
  } else {
    // 因式分解
    for (var j = 1; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count == 1) {
      console.log(i);
    }
    count = 0; // 重新赋值0
  }
}
