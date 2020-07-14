const Mock = require("mockjs");
const { random } = require("lodash");

var data1 = Mock.mock({
  "number|1-100.1-10": 1,
  "number1|123.1-10": 1,
  "number2|123.3": 1,
  "number3|123.10": 1,
});
let arr = [1, 2, 3];
var data1 = Mock.mock({
  "list|1": arr,
  "list1|+1": arr,
  "list2|1-3": arr,
  "list3|2": arr,
});
var data1 = Mock.mock({
  regexp1: /[a-z][A-Z][0-9]/,
  regexp2: /\w\W\s\S\d\D/,
  regexp3: /\d{5,10}/,
});
var data1 = Mock.mock({
  name: {
    first: "@FIRST",
    middle: "@FIRST",
    last: "@LAST",
    full: "@first @middle @last",
  },
});

var data = Mock.mock({});

var Random = Mock.Random
Random.extend({
  constellation: function(date) {
    var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
    return this.pick(constellations)
}
})

let ret = Random.constellation()

let pool = Random.character('aieou')
let str1 = Random.string()
let str2 = Random.string(5)
let str3 = Random.string('lower', 5)
let str4 = Random.string(7, 10)
let str5 = Random.string('aeiou', 3, 5)
let str6 = Random.string('壹贰叁肆伍陆柒捌玖拾', 2, 4)

let ran1 = Random.range()
let ran2 = Random.range(10)
let ran3 = Random.range(3, 7)
let ran4 = Random.range(1, 10, 3)
let ran5 = Random.range(1, 10, 4)

let d1 = Random.date()
let d2 = Random.date('yyyy-MM-dd')
let d3 = Random.date('yy-MM-dd')
let d4 = Random.date('y-MM-dd')
let d5 = Random.date('y-M-d')

let t1 = Random.time()
let t2 = Random.time('A HH:mm:ss')
let t3 = Random.time('a HH:mm:ss')
let t4 = Random.time('HH:mm:ss')
let t5 = Random.time('H:m:s')

let dt1 = Random.datetime()
let dt2 = Random.datetime('yyyy-MM-dd HH:mm:ss')
let dt3 = Random.datetime('yyyy-MM-dd a HH:mm:ss')

let n1 = Random.now()
let n2 = Random.now('day', 'yyyy-MM-dd HH:mm:ss SS')
let n3 = Random.now('day')
let n4 = Random.now('yyyy-MM-dd HH:mm:ss SS')

let n5 = Random.now('year')
let n6 = Random.now('month')
let n7 = Random.now('day')
let n8 = Random.now('week')
let n9 = Random.now('hour')
let n10 = Random.now('minute')
let n11 = Random.now('second')

let p1 = Random.paragraph()
// let p2 = Random.paragraph(2)
// let p3 = Random.paragraph(1, 3)


let cp1 = Random.cparagraph()

let s1 = Random.sentence()

let cs1 = Random.csentence()

let cw1 = Random.cword()
// => "干"
let cw2 = Random.cword('零一二三四五六七八九十')
// => "六"
let cw3 = Random.cword(3)
// => "别金提"
let cw4 = Random.cword('零一二三四五六七八九十', 3)
// => ""七七七""
let cw5 = Random.cword(5, 7)
// => "设过证全争听"
let cw6 = Random.cword('零一二三四五六七八九十', 5, 7)
// console.log(cw1, cw2, cw3, cw4, cw5);

let ct1 = Random.ctitle(2,9)
// console.log(ct1);
// console.log(Random.first(), Random.last(), Random.name(), Random.name(true));
// console.log(Random.name(), Random.name(true));
// console.log(Random.cfirst(), Random.clast(), Random.cname());
// console.log(Random.url());
// console.log(Random.url(Random.protocol(), '80'));
// console.log(Random.protocol());

// console.log(Random.tld());
// console.log(Random.email(), Random.ip());

// console.log(Random.region(), Random.province(), Random.city());
// console.log(Random.county(), Random.county(true), Random.zip());
// console.log(Random.guid());

let ret1 = Mock.valid({name: 'value1'}, {name: 'value1'})

let m1 = Mock.mock({
  'name|1': '@LAST',
  "color|1": '@color',
  name: '@name'
})
console.log(m1);
// console.log(cs1);
// console.log(s1);
// console.log(cp1);
// console.log(n8);

// console.log(n5, n6, n7, n8, n9, n10, n11);

// console.log(dt1, dt2, dt3);

// console.log(t1, t2, t3, t4, t5);
// console.log(d1, d2, d3, d4, d5);

// console.log(ran1, ran2, ran3, ran4, ran5);

// console.log(Mock.mock('@domain'), ret);
// console.log(data1);
