// 1. 两种模糊匹配

// var regex = /hello/
// console.log(regex.test('hello'));

// 1.1 横向模糊匹配
// var regex = /ab{2,5}c/g
// var string = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc'
// console.log(string.match(regex));

// 1.2 纵向模糊匹配
// var regex = /a[123]b/g
// var string = 'a0b a1b a2b a3b a4b'
// console.log(string.match(regex));

// var regex = /[^]/
// var string = 'hello world'
// console.log(string.match(regex));

// var regex1 = /[^]/g
// var string = 'hello wrold1'
// console.log(string.match(regex1));

// 3 贪婪匹配和惰性匹配
// var regex = /\d{2,5}/g
// var string = '123 1234 12345 123456'
// console.log(string.match(regex));

// var regex1 = /\d{2,5}?/g
// var string1 = '123 1234 12345 123456'
// console.log(string1.match(regex1));

// 4 多选分支
// var regex = /good|nice/g
// var string = 'good idea, nice try.'
// console.log(string.match(regex));

// var regex1 = /good|goodbye/g
// var string1 = 'goodbye'
// console.log(string1.match(regex1));

// var regex2 = /goodbye|good/g
// var string2 = 'goodbye'
// console.log(string2.match(regex2));

// 5.1 匹配16进制颜色值
// var regex = /#([0-9a-zA-Z]{6}|[0-9a-zA-Z]{3})/g
// var string = '#ffbbad #Fc01DF #FFF #ffE'
// console.log(string.match(regex));

// 5.2 匹配时间
// var regex = /^([01][0-9]|2[0-3]):[0-5][0-9]$/
// console.log(regex.test('23:59'));
// console.log(regex.test('02:07'));

// var regex1 = /^(0?[0-9]|1[0-9]|2[0-3]):(0?[0-9]|[1-5][0-9])$/
// console.log(regex1.test('23:59'));
// console.log(regex1.test('02:07'));
// console.log(regex1.test('7:9'));

// 5.3 匹配日期
// var regex = /^[0-9]{4}-(0[0-9]|1[0-2])-(0[0-9]|[1-2][0-9]|3[0-1])$/
// console.log(regex.test('2020-02-20'));

// 5.4 window操作系统文件路径
// var regex = /[a-zA-z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?/
// console.log(regex.test("F:\\study\\javascript\\regex\\regular expression.pdf"));
// console.log(regex.test("F:\\study\\javascript\\regex\\"));
// console.log(regex.test("F:\\study\\javascript"));
// console.log(regex.test("F:\\"));

// 5.5 匹配id
// var regex = /id=".*"/
// var string = '<div id="container" class="main"></div>'
// console.log(string.match(regex));

// var regex = /id=".*?"/
// var string = '<div id="container" class="main"></div>'
// console.log(string.match(regex));

// var regex = /id="[^"]*"/
// var string = '<div id="container" class="main"></div>'
// console.log(string.match(regex));

// 2.1 位置匹配 ^ $
// var result = "hello".replace(/^|$/g, "#")
// console.log(result);

// console.log("hello".replace(/^^^^|$/g, "#"));

// var result = 'I\nlove\njavascript'.replace(/^|$/gm, "#")
// console.log(result);

// 2.2 \b 和 \B
// var result = "[JS] Lesson_01.mp4".replace(/\b/g, "#")
// console.log(result);

// var result = '[JS] Lesson_01.mp4'.replace(/\B/g, '#')
// console.log(result);


// 2.3 (?=p) 和 (?!p)
// var result = "hello".replace(/(?=l)/g, '#')
// console.log(result);

// var result = "hello".replace(/(?!l)/g, "#")
// console.log(result);

// console.log(/^^hello$$$/.test("hello"));
// console.log(/(?=he)^^he(?=\w)llo\b\b$/.test('hello'));

// console.log('12345678'.replace(/\B(?=(\d{3})+\b)/g, ","));

// 2.4 验证密码 同时包含两种字符
// var reg = /(?=.*[0-9])(?=.*[a-z])^[0-9a-zA-Z]{6, 12}$/

// var reg = /((?=.*\d)(?=.*[a-z])|(?=.*[\d])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z]))[\da-zA-Z]{6,12}$/
// console.log(reg.test('1234567'));
// console.log(reg.test('abcdef'));
// console.log(reg.test("ABCDEFGH"));
// console.log(reg.test("ab23C"));
// console.log(reg.test("ABCDEF234"));
// console.log(reg.test("abcdEF234"));

// 1.1 分组
// var regex = /(ab)+/g
// var string = 'ababa abbb ababab'
// console.log(string.match(regex));

// var regex = /^I love (JavaScript|Regular Expression)$/
// console.log(regex.test("I love JavaScript"));
// console.log(regex.test("I love Regular Expression"));

// 2 提取数据
// var regex = /(\d{4})-(\d{2})-(\d{2})/
// var string = '2019-02-20'
// // console.log(string.match(regex));
// console.log(regex.exec(string));
// // console.log(regex.test(string));
// console.log(RegExp.$1);
// console.log(RegExp.$2);
// console.log(RegExp.$3);

// var regex = /(\d{4})-(\d{2})-(\d{2})/
// var string = '2019-09-02'
// var result = string.replace(regex, '$2/$3/$1')
// console.log(result);

// console.log(string.replace(regex, function () {
//   return RegExp.$2
// }));

// 3 反向引用
// var regex = /\d{4}(-|\/|.)\d{2}(-|\/|\.)\d{2}/
// var regex1 = /\d{4}(-|\/|.)\d{2}\1\d{2}/
// var string1 = '2019-04-12'
// var string2 = '2019/04/04'
// var string3 = '2019.04.04'
// var string4 = '2019-04/04'
// console.log(regex.test(string1));
// console.log(regex.test(string2));
// console.log(regex.test(string3));
// console.log(regex.test(string4));
// console.log("------------");
// console.log(regex1.test(string1));
// console.log(regex1.test(string2));
// console.log(regex1.test(string3));
// console.log(regex1.test(string4));

// 3.1 括号嵌套
// var regex = /^((\d)(\d(\d)))\1\2\3\4$/
// var string = '1231231233'
// console.log(regex.test(string));
// console.log(string.split(regex));
// console.log(RegExp.$1);
// console.log(RegExp.$2);
// console.log(RegExp.$3);
// console.log(RegExp.$4);

// var regex = /(1)(2)(3)(4)(5)(6)(7)(8)(9)(#) \10+/
// var string = '123456789# ####'
// console.log(regex.test(string));

// var regex = /\1\2\3\4\5/
// console.log(regex.test('\1\2\3\4\5'));
// console.log('\1\2\3'.split(''));

// function titleize(str) {
//   return str.toLowerCase().replace(/(?:^|\s)\w/g, function (c) {
//     return c.toUpperCase()
//   })
// }
// console.log(titleize('my name is epeli'));

// function camelize(str) {
//   return str.replace(/[-_\s]+(.)?/g, function (match, c) {
//     return c ? c.toUpperCase() : ''
//   })
// }
// console.log(camelize("-moz-transform"));

// function dasherize(str) {
//   return str.replace(/([A-Z])/g, "-$1").replace(/[-_\s]+/g, '-').toLowerCase()
// }
// console.log(dasherize('MozTransform'));

// 匹配标签

// var regex = /<([^>]+)>[^]*<\/\1>/
// var string1 = '<title>regular expression</title>'
// var string2 = '<p>hangfeng bye bye</p>'
// var string3 = "<title></p>"
// console.log(regex.test(string1));
// console.log(regex.test(string2));
// console.log(regex.test(string3));

// let reg = /^[abc]{3}+$/
// var string = '^'
// var string1 = '\^'
// console.log(string == string1);

// var string = '[abc]'
// var regex = /\[abc]/
// console.log(string.match(regex));

// var string = '{,3}'
// var regex = /{,3}/g
// console.log(string.match(regex));

// var string = "(hello)"
// var regex = /\(hello\)/
// console.log(string.match(regex));

// console.log('123456789'.replace(/(?<=^.{0,2})./g, "*"));
// console.log('123456789'.replace(/(?<=^(.{4})*.{2})./g, '*'));

// 数组去重
// function distinct(string) {
//   return string.replace(/(.)\1+/g, '$1')
// }

// console.log(distinct('aabbbccccc'));

// function distince(string) {
//   while(/(.).*?\1/.test(string)) {
//     string = string.replace(/(.)(.*?)\1/, "$1$2")
//   }
//   return string
// }
// console.log(distince('abbacbc'));

// function distince(string) {
//   return string.replace(/(.)(?=.*?\1)/g, "")
// }
// console.log(distince('abbacbc'));


// function distance(string) {
//   return string.replace(/(.)(?<=\1.*?\1)/g, "")
// }
// console.log(distance('abbacbc'));

// function distance(arr) {
//   return arr.join("").replace(/(.)(?<=\1.*?\1)/g, "").split('')
// }
// // console.log(distance(['a', 'b', 'b']));
// // console.log(JSON.stringify(["aa",1,"ab",true,1,true,"aa"]));

// function distance(arr) {
//   var string = JSON.stringify(arr)
//   string = string.replace(/,([^,]+)(?<=\1.*?\1)(?=,|])/g, (m, $1) => $1 == '"' ? m : "")
//   return JSON.parse(string)
// }
// console.log(distance(["aa",1,"ab",true,1,true,"aa"]));

// function sum(n, m) {
//   n = Array(n+1).join('#')
//   m = Array(m+1).join('#')
//   console.log(n);
//   console.log(m);
//   let a = n.replace(/$/, m)
//   console.log(a);

// }
// sum(3, 2)

// // 最大公约数
// function greatestCommondivisor(n, m) {
//   n = Array(n+1).join('#')
//   m = Array(m + 1).join('#')
//   return `${n}-${m}`.match(/^(.+)\1*-\1+/)[1].length
// }

// console.log(greatestCommondivisor(6, 3));

// console.log("Helo"[0].toLowerCase());


// function duplicateCount(text){
//   //...
//   var obj = {}
//   for (var i = 0; i < text.length; i ++) {
//     j = text[i].toLowerCase()
//     if (!obj[j]) {
//       obj[j] = 1;
//     } else {
//       obj[j] ++
//     }
//   }
//   console.log(obj);
//   let count = 0;
//   for (key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       if (obj[key] > 1) count ++
//     }
//   }
//   return count
// }

// console.log(duplicateCount('hello'));

// 找出相同数超过两个的数量

// function sortArray(array) {
//   if (!array) return array
//   debugger
//   for (var i = 0; i < array.length - 1; i ++) {
//     if (array[i] % 2 == 0) continue;
//     for (var j = i + 1; j < array.length; j ++) {
//       if (array[j] % 2 == 0) continue;
//       let temp = array[i];
//       if (array[j] < temp) {
//         array[i] = array[j]
//         array[j] = temp
//       }
//     }
//   }
//   return array
// }
// console.log(sortArray([5, 3, 2, 8, 1, 4]));

// function sortArray (array) {
//   const odd = array.filter(x => x % 2).sort((a, b) => a - b)
//   return array.map(x => x % 2 ? odd.shift() : x)
// }
// console.log(sortArray([5, 3, 2, 8, 1, 4]));

// function cloneRegExp (regexp) {
// }

// let regex = /xyz/gim

// console.log(regex.constructor);

// console.log(regex.source);
// console.log(regex.flags);

// let [id, num] = ('+' + 1).split('')
// console.log(id, num);
// console.log(typeof num);


// let reg = /[4-9\]01]/

// console.log(reg.test("]"));

console.log(/^<[^>]?>$/.test('<>'));
