//

function getlength1(str) {
  return str.trim().replace(/\s+/g, " ");
}

// 匹配ascall 的长度

str.match(/[\x00-\xff]/g).length;

// 10 个字符长度
Array(20).join();

"莹".repeat(10);

"-".repeat(10).match(/[\x00-\xff]/g).length; // 10
