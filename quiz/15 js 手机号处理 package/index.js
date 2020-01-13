// 1.
// xxx.replace(/^\s+|\s+$, '')
let str1 = "13208033621 ";
console.log(str1.trim(str1));

// 2. 全角转半角
// 常规
function toCDB(str) {
  var tmp = "";
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 65248 && str.charCodeAt(i) < 65375) {
      tmp += String.fromCharCode(str.charCodeAt(i) - 65248);
    } else {
      tmp += String.fromCharCode(str.charCodeAt(i));
    }
  }
  return tmp;
}
// 骚操作
[..."０１２３４５６７８９"].reduce(
  (acc, cur, idx) => acc.replace(new RegExp(cur, "g"), idx),
  "０１２３４５６７８９"
);

// 骚操作2
var strTel = "１３２０８０３３６２１";
var n = "０１２３４５６７８９";
var result_2 = strTel.replace(/[０-９]/g, item => n.indexOf(item));
console.log("----------第2题---------", result_2);

let str2 = "";

let str3 = "+8613208033621";

console.log(str3.replace(/^\+86/, ""));

let str4 = "1320-8033-621";
let str5 = "13208033  621";

// 4
function normalStr(str) {
  let count = 0;
  str = str.replace(/\d/g, function(all) {
    count++;
    return all;
  });

  if (count == 11) {
    return str.replace(/-|\s+/g, function(all) {
      return "";
    });
  }
}

// 正则
function normalTel(str) {
  let mob = str.replace(/(-|\s?)/g, "");
  return mob.length === 11 ? mob : "手机号码错误";
}

console.log(normalStr(str4));
console.log(normalStr(str5));

function isMobile(str) {
  return /^1\d{10}$/.test(str);
}
console.log(isMobile("12345678 99"));
