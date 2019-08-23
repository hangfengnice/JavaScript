// 字符串新增方法

// 1 String.fromCodePoint()

// 2 String.raw()
{
  console.log(String.raw`Hi\n${2 + 3}!`); // 返回 "Hi\n5!"
  console.log(String.raw({ raw: "test" }, 0, 1, 2)); // 't0e1s2t'
}

// 3 实例方法：codePointAt() 

// 4 实例方法：includes(), startsWith(), endsWith()

  // includes()：返回布尔值，表示是否找到了参数字符串。
  // startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
  // endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
  {
    let s = "Hello world!";
    console.log(s.startsWith("Hello"), s.endsWith("!"), s.includes("o")) // true * 3
  }
  // 这三个方法都支持第二个参数，表示开始搜索的位置
  {
    let s = "Hello world!";
    console.log(s.startsWith("world", 6), s.endsWith("!", 5), s.includes("o", 6));
     // true  false true
  }

// 5 实例方法：repeat()
  // repeat方法返回一个新字符串，表示将原字符串重复n次
  {
    console.log("x".repeat(3)); // "xxx"
    console.log("na".repeat(0)) // ''
  }
  // 参数如果是小数，会被取整
  {
    console.log("na".repeat(2.9)); // 'nana'
  }
  // 如果repeat的参数是负数或者Infinity，会报错
  {
    // "na".repeat(Infinity);// RangeError
    // "na".repeat(-1); // RangeError
  }
  //如果参数是 0 到-1 之间的小数，则等同于 0，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0。
  {
    console.log("na".repeat(-0.9)); // ''
  }
  // 参数NaN等同于 0。
  {
    console.log("na".repeat(NaN)); // ""
  }
  // 如果repeat的参数是字符串，则会先转换成数字。
  {
    console.log("na".repeat("na")); // ''
    console.log("na".repeat("3"));  // "nanana"
  }

// 6 实例方法：padStart()，padEnd()
  // padStart()和padEnd()一共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串
  
  // 如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串
  {
    console.log("xxx".padStart(2, "ab")); // 'xxx'
    console.log("xxx".padEnd(2, "ab")); // 'xxx'
  }
  // 如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串
  {
    console.log("abc".padStart(10, "0123456789"));// '0123456abc'
  }
  // 如果省略第二个参数，默认使用空格补全长度。
  {
    console.log("x".padStart(4)); // '   x'
    console.log("x".padEnd(4)); // 'x   '
  }
  // 用途
  // 1 padStart()的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串 
    {
      console.log("1".padStart(10, "0")); // "0000000001"
      console.log("12".padStart(10, "0")); // "0000000012"
      console.log("123456".padStart(10, "0")); // "0000123456"
    }
  // 2 提示字符串格式
    {
      console.log("12".padStart(10, "YYYY-MM-DD")); // "YYYY-MM-12"
      console.log("09-12".padStart(10, "YYYY-MM-DD")); // "YYYY-09-12"
    }

// 7 实例方法：trimStart()，trimEnd()
  // 浏览器还部署了额外的两个方法，trimLeft()是trimStart()的别名，trimRight()是trimEnd()的别名
  {
    const s = "  abc  ";
    s.trim(); // "abc"
    console.log(s.trimStart()); // "abc  "
    console.log(s.trimEnd()); // "  abc"
  }
