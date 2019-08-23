// 1 字符串的遍历器接口
{
  // ES6 为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历。
  for (let codePoint of "foo") {
    console.log(codePoint); // f o o
  }
}
// 2 模版字符串
// 变量 ${}
// 大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。
{
  let x = 1
  console.log(`${x}`) // 1
}
// 调用函数
{
  function fn() {
    return "Hello World";
  }

  console.log(`foo ${fn()} bar`); // foo Hello World bar
}
// 变量未声明 报错
{
  // console.log(`hello ${hangfeng}`) // Uncaught ReferenceError
}
// 模板字符串甚至还能嵌套

// 如果需要引用模板字符串本身，在需要时执行，可以写成函数
{
  let func = name => `Hello ${name}!`;
  console.log(func("hangfeng"))
}

// 3 标签模版

// 可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串
{
  // alert`标签模版`
  console.log`标签模版`; // ["标签模版", raw: Array(1)]
}
// 模板字符里面有变量
{
  let a = 5
  let b = 10
  function tag(s, v1, v2) {
    console.log(s[0], s[1], s[2], v1, v2);
    return "OK";
  }
  tag`Hello ${a + b} world ${a * b}`;
}
// 例子
{
  let total = 30;
  let msg = passthru`The total is ${total} (${total * 1.05} with tax)`;

  function passthru(literals) {
    let result = "";
    let i = 0;

    while (i < literals.length) {
      result += literals[i++];
      if (i < arguments.length) {
        result += arguments[i];
      }
    }
    return result;
  }
  console.log()
}
// 
{
  let sender = '<script>alert("abc")</script>';
  let message = SaferHTML`<p>${sender} has sent you a message.</p>`;

  function SaferHTML(templateData) {
    let s = templateData[0];
    console.log(templateData == arguments[0]);
    console.log(arguments)
    for (let i = 1; i < arguments.length; i++) {
      let arg = String(arguments[i]);

      // Escape special characters in the substitution.
      s += arg
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      // Don't escape special characters in the template.
      s += templateData[i];
    }
    return s;
  }
}
