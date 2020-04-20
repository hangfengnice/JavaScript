# function

## 默认参数值

* 对 arguments 的影响
* 默认参数表达式

## 不定参数

* 对象字面量 setter 不能使用不定参数

## 增强的 Function 构造函数

* 支持在创建函数时定义默认参数和不定参数
  
## 展开操作符

## name 属性

## new.target

## 箭头函数

* 没有 this super arguments new.target
* 不能通过 new 关键字调用
* 没有原型
* 不可以改变 this 的绑定
* 不支持 arguments 对象
* 不支持重复的命名参数

## 尾调用优化

* 尾调用不访问当前栈帧的变量 （也就是说函数不是一个闭包）
* 在函数内部，尾调用是最后一句
* 尾调用的结果作为函数值返回
