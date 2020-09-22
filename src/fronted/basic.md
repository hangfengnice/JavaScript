# 面试问题 以及相关的内容

1. 数组跟链表的区别

- 数组 内存连续
- 优点： 查找方便
- 缺点： 删除 跟 插入 性能较差
- 链表 内存不连续
- 优点： 删除 跟 插入 性能较好
- 缺点： 查找略差

浏览器 缓存

强制缓存

- cache-control

- max-age
- s-maxage
- public
- private
- no-cache
- no-store
- must-revalidate

- expires

协商缓存

last-modified

If-Modified-Since

last-modified

etag

1 确定值的类型 typeof instanceof Object.prototype.toString

2 null 跟 undefined null

3 输出 多行字符串
let ret = function () {/_
line1
line2
line3
_/}
.toString()
.split("\n")
.slice(1, -1)
.join("\n");

4 base64 转码
btoa() 任意值到 base64
atob() base64 编码为原来的值

5 in 与 for in toString in for in

6 function f(a, a) { // 根据第二个参数为主 // 怎么获取第一个参数的值 arguments[0]
console.log(a);
}
f(1)

7 空位 跟 hole 的区别 forEach for in Object.keys() 会跳过 空位

8 或运算符号 最大值 2147483647

9 取整 ~~

10 交换两个数值 a ^= b; b ^= a; a ^= b

11 rgb 转化 为 hex

var color = {r: 186, g: 218, b: 85};

// RGB to HEX
// (1 << 24)的作用为保证结果是 6 位数
var rgb2hex = function(r, g, b) {
return '#' + ((1 << 24) + (r << 16) + (g << 8) + b)
.toString(16) // 先转成十六进制，然后返回字符串
.substr(1); // 去除字符串的最高位，返回后面六个字符串
}

rgb2hex(color.r, color.g, color.b)

12 console.log() 支持以下占位符，不同类型的数据必须使用对应的占位符

%s 字符串
%d 整数
%i 整数
%f 浮点数
%o 对象的链接
%c CSS 格式字符串

13 console.trace()

14 控制台 小操作

$_属性返回上一个表达式的值
$x(path)方法返回一个数组，包含匹配特定 XPath 表达式的所有 DOM 元素
keys(object)方法返回一个数组，包含object的所有键名。
values(object)方法返回一个数组，包含object的所有键值。
dir(object)：显示特定对象的所有属性，是console.dir方法的别名。

使用 commond 显示隐藏的菜单 (command + shift + P)

  屏幕截图 全屏 (command + shift + P => screen => capture full size screenshot) 当前显示 (capture screenshot)
  layout
  切换主题 (theme)

  递增/递减
  1
  10 (shift + )
  100 (command + shift + )
  0.1 (option + )

15 判断一个变量 是否是对象 Object方法的参数是一个对象，它总是返回该对象，即不用转换  vlaue == Object(value)

16 语义的区别 Object(value)与new Object(value)两者的语义是不同的，Object(value)表示将value转成一个对象，new Object(value)则表示新生成一个对象，它的值是value。

17 Object.keys方法只返回可枚举的属性 Object.getOwnPropertyNames方法还返回不可枚举的属性名

18 value，只要writable和configurable有一个为true，就允许改动。

19 obj对象经过Object.preventExtensions以后，就无法添加新属性了。
    Object.seal方法使得一个对象既无法添加新属性，也无法删除旧属性。

20 Object.freeze()以后，修改属性、新增属性、删除属性都无效了

21 对空数组使用pop方法，不会报错，而是返回undefined

22 map方法的回调函数在这个位置不会执行，会跳过数组的空位
   forEach方法也会跳过数组的空位。
   filter
   some
   every
   reduce,
   reduceRight

23 如果参数为负数，或大于等于字符串的长度，charCodeAt返回NaN

24 split方法还可以接受第二个参数，限定返回数组的最大成员数。

25 Math.round(-1.5) -1  Math.sqrt方法返回参数值的平方根。如果参数是一个负值，则返回NaN。

26 Date 时间
  无论有没有参数，直接调用Date总是返回当前时间
  toDateString方法返回日期字符串（不含小时、分和秒）。
  Date.prototype.toLocaleDateString()：本地日期 "2020/9/22"
  d2.setDate(-1)表示设为上个月的倒数第二天，即12月30日。

27 regex
  设置正则表达式的lastIndex属性，对match方法无效，匹配总是从字符串的第一个字符开始。
  $&：匹配的子字符串。
  $`：匹配结果前面的文本。
  $'：匹配结果后面的文本。
  $n：匹配成功的第n组内容，n是从1开始的自然数。
  $$：指代美元符号$。

28 JSON.stringify 3个参数
   JSON.parse() 2 个参数
