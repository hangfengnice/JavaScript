/**
 * 
 * 
 * 
 */

 var bankCode = '6222081812002934027';
console.log(bankCode.replace(/(\d{4})/g, '$1 '));
// VM251:2 6222 0818 1200 2934 027
undefined
var numberCode = '5702375';
console.log(numberCode.replace(/\B(?=(\d{3})+\b)/g, ','));
// VM258:2 5,702,375
undefined
var numberCode = '599702375';
console.log(numberCode.replace(/\B(?=(\d{3})+\b)/g, ','));



function formatFileSize (filesize = 1023) {
  let K = 1024,
      M = 1024 ** 2,
      G = 1024 ** 3;

  switch(true) {
    case filesize > G:
      return (filesize / G).toFixed(1) + "G";
    case filesize > M:
      return (filesize / M).toFixed(1) + "M";
    case filesize > K:
      return (filesize / K).toFixed(1) + "K";
    default:
      return filesize + "B";
  }
}
console.log(formatFileSize());
console.log(formatFileSize(1025));
console.log(formatFileSize(1024 ** 2 + 1));
console.log(formatFileSize(1024 ** 3 + 1));

mvpicy;


