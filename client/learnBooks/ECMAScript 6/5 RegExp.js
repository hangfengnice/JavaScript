// 正则的扩展

// 1 RegExp 构造函数
{
  // 原有正则对象的修饰符是ig，它会被第二个参数i覆盖
  console.log(new RegExp(/abc/gi, "i").flags);
}

// 2 字符串的正则方法
// 字符串对象共有 4 个方法，可以使用正则表达式：match()、replace()、search()和split()
{
  // ES6 将这 4 个方法，在语言内部全部调用RegExp的实例方法，从而做到所有与正则相关的方法，全都定义在RegExp对象上
  // String.prototype.match 调用 RegExp.prototype[Symbol.match]
  // String.prototype.replace 调用 RegExp.prototype[Symbol.replace]
  // String.prototype.search 调用 RegExp.prototype[Symbol.search]
  // String.prototype.split 调用 RegExp.prototype[Symbol.split]
}

// 3 RegExp.prototype.flags 属性
// flags 返回正则表达式的修饰符
{
  console.log(/abc/ig.flags) // ig
}

// 4 s 修饰符 dotAll模式
// ES2018 引入s修饰符，使得.可以匹配任意单个字符。
{
  console.log(/foo.bar/.test("foo\nbar")); // false
  console.log(/foo.bar/s.test("foo\nbar")); // true
}

// 4 String.prototype.matchAll
{
  const string = "test1test2test3";

  // g 修饰符加不加都可以
  const regex = /t(e)(st(\d?))/g;

  for (const match of string.matchAll(regex)) {
    console.log(match);
  }
  // ["test1", "e", "st1", "1", index: 0, input: "test1test2test3"]
  // ["test2", "e", "st2", "2", index: 5, input: "test1test2test3"]
  // ["test3", "e", "st3", "3", index: 10, input: "test1test2test3"]
  // 遍历器转为数组是非常简单的，使用...运算符和Array.from方法就可以了。
  {
    // 转为数组方法一
    [...string.matchAll(regex)];
    // 转为数组方法二
    Array.from(string.matchAll(regex));
  }
}