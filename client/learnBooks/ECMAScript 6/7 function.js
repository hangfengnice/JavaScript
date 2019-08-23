// 函数的扩展

// 1 函数参数的默认值
{
  // 如果非尾部的参数设置默认值，实际上这个参数是没法省略的。
  function f(x = 1, y) {
    return [x, y];
  }

  f(); // [1, undefined]
  f(2); // [2, undefined])
  // f(, 1) // 报错
  f(undefined, 1); // [1, 1]

  // ///函数的 length 属性
  // 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。

  var x = 1;
  function foo(
    x,
    y = function() {
      x = 2;
    }
  ) {
    var x = 3;
    y();
    console.log(x);
  }

  foo(); // 3
  x; // 1
}

// 2 rest 参数
{
  function push(array, ...items) {
    items.forEach(function(item) {
      array.push(item);
      console.log(item);
    });
  }

  var a = [];
  push(a, 1, 2, 3);
}

// 3 name 属性
{
  // bind返回的函数，name属性值会加上bound前缀
}

// 4 箭头函数
{
// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
}

// 5 尾调用优化

// 尾递归