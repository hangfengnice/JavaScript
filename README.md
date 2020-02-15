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
