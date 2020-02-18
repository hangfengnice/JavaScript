# Javascript

## 1. null 与 undefined 的区别

* null 表示 "没有对象"， 即该处不应该有值。
  * 作为函数的参数，表示该函数的参数不是对象
  * 作为对象原型链的终点

* undefined 表示 "缺少值" ，就是此处应该有值， 但是还没有定义
  * 变量被声明时，但没有赋值时，就等于 undefined
  * 调用函数时，应该提供的参数没有提供，该参数就等于 undefined
  * 对象没有赋值的属性，该属性的值为 undefined
  * 函数没有返回值时，默认返回 undefined

1. 判断是否是移动端 'ontouchstart' in document.body
2. div.offsetHeight; // 触发浏览器的重绘

## 2. RegExp

* search和match，会把字符串转换为正则的
* match返回结果的格式，与正则对象是否有修饰符g有关.
* split方法看起来不起眼，但要注意的地方有两个的
  * 第一，它可以有第二个参数，表示结果数组的最大长度：
  * 第二，正则使用分组时，结果数组中是包含分隔符的

## 3. 假值

* undefined
* null
* false
* +0 -0 NaN
* ""
