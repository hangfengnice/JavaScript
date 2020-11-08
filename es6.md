# es6

## let 和 const 命令

let 命令
基本用法
不存在变量提升
暂时性死区
不允许重复声明
块级作用域
为什么需要块级作用域？
ES6 的块级作用域
块级作用域与函数声明
const 命令
基本用法
本质
ES6 声明变量的六种方法
顶层对象的属性
globalThis 对象

## 变量的结构赋值

数组的解构赋值
基本用法
默认值
对象的解构赋值
简介
默认值
注意点
字符串的解构赋值
数值和布尔值的解构赋值
函数参数的解构赋值
圆括号问题
不能使用圆括号的情况
可以使用圆括号的情况
用途

## 字符串的扩展

字符的 Unicode 表示法
字符串的遍历器接口
直接输入 U+2028 和 U+2029
JSON.stringify() 的改造
模板字符串
实例：模板编译
标签模板
模板字符串的限制

## 字符串的新增方法

String.fromCodePoint()
String.raw()
实例方法：codePointAt()
实例方法：normalize()
实例方法：includes(), startsWith(), endsWith()
实例方法：repeat()
实例方法：padStart()，padEnd()
实例方法：trimStart()，trimEnd()
实例方法：matchAll()
实例方法：replaceAll()

## 正则的扩展

RegExp 构造函数
字符串的正则方法
u 修饰符
RegExp.prototype.unicode 属性
y 修饰符
RegExp.prototype.sticky 属性
RegExp.prototype.flags 属性
s 修饰符：dotAll 模式
后行断言
Unicode 属性类
具名组匹配
简介
解构赋值和替换
引用
正则匹配索引
String.prototype.matchAll()

## 数值的扩展

二进制和八进制表示法
Number.isFinite(), Number.isNaN()
Number.parseInt(), Number.parseFloat()
Number.isInteger()
Number.EPSILON
安全整数和 Number.isSafeInteger()
Math 对象的扩展
Math.trunc()
Math.sign()
Math.cbrt()
Math.clz32()
Math.imul()
Math.fround()
Math.hypot()
对数方法
双曲函数方法
指数运算符
BigInt 数据类型
简介
BigInt 对象
转换规则
数学运算
其他运算

## 函数的扩展

函数参数的默认值
基本用法
与解构赋值默认值结合使用
参数默认值的位置
函数的 length 属性
作用域
应用
rest 参数
严格模式
name 属性
箭头函数
基本用法
使用注意点
不适用场合
嵌套的箭头函数
尾调用优化
什么是尾调用？
尾调用优化
尾递归
递归函数的改写
严格模式
尾递归优化的实现
函数参数的尾逗号
Function.prototype.toString()
catch 命令的参数省略

## 数组的扩展

扩展运算符
含义
替代函数的 apply 方法
扩展运算符的应用
Array.from()
Array.of()
数组实例的 copyWithin()
数组实例的 find() 和 findIndex()
数组实例的 fill()
数组实例的 entries()，keys() 和 values()
数组实例的 includes()
数组实例的 flat()，flatMap()
数组的空位
Array.prototype.sort() 的排序稳定性
