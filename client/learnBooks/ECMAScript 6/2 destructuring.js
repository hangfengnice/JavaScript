// 1 数组的解构赋值
// 1.1 基本用法
{
  let [a, b, c] = [1, 2, 3];
  console.log(a, b, c); // 1 2 3
}
// 若是解构不成功 值为 undefined
{
  let [foo] = [];
  let [bar, foo1] = [1];
  console.log(foo, bar, foo1); // undefined 1  undefined
}
// 默认值
{
  let [foo = true] = [];
  let [x, y = "b"] = ["a"]; // x='a', y='b'
  let [x1, y1 = "b"] = ["a", undefined];
  // 当数组组员严格等于 undefine 默认值生效
  console.log(foo, x, y, x1, y1); // true "a" "b" "a" "b"
}
// 惰性求职
{
  function f() {
    console.log("aaa");
  }

  let [x = f()] = [1];
  console.log(x) // 1
}

// 2 对象的解构赋值

// 解构失败 变量的值为 undefined
{
  let {foo} = {bar: "baz"}
  console.log(foo)
}
// 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。
{
  let {log} = console
  log('console.log')
}
// 如果变量名与属性名不一致，必须写成下面这样。
// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
{
  let obj = { first: "hello", last: "world" };
  let { first: f, last: l } = obj;
  console.log(f, l)  // hello world
}
//对象的解构赋值可以取到继承的属性
{
  const obj1 = {};
  const obj2 = { foo: "bar" };
  Object.setPrototypeOf(obj1, obj2);

  const { foo } = obj1;
  console.log(foo) // bar
}

// 默认值
// 默认值生效的条件是，对象的属性值严格等于undefined
{
  var { x = 3 } = { x: undefined };
  console.log(x)  // 3

  var { x = 3 } = { x: null };
  console.log(x) // null
}

// 3 字符串的解构赋值
{
  const [a, b, c, d, e] = "hello";
  console.log(a, b, c, d, e) // h e l l o
  // length 
  let { length: len } = "hello";
  console.log(len) // 5
}

// 4 数值和布尔值的解构赋值
{
  let { toString: s } = 123;
  console.log(s === Number.prototype.toString) // true

  let { toString: s1 } = true;
  console.log(s1 === Boolean.prototype.toString) // true
}

// 5 函数参数的解构赋值
{
  function move({ x, y } = { x: 0, y: 0 }) {
    return [x, y];
  }

  move({ x: 3, y: 8 }); // [3, 8]
  move({ x: 3 }); // [3, undefined]
  move({}); // [undefined, undefined]
  move();  // [0, 0]
}

// 6 用途
// 6.1 交换变量的值
{
  let x = 1;
  let y = 2;
  [y, x] = [x, y]
  console.log(x, y) // 2 1
}

// 6.2 函数返回值
{
  // 数组
  function example() {
    return [1, 2, 3];
  }
  let [a, b, c] = example();

  // 返回一个对象
  function example1() {
    return {
      foo: 1,
      bar: 2
    };
  }
  let { foo, bar } = example1();
}
// 6.3 函数参数的定义
{
  // 参数是一组有次序的值
  function f([x, y, z]) { }
  f([1, 2, 3]);

  // 参数是一组无次序的值
  function f1({x, y, z}) { }
  f1({z: 3, y: 2, x: 1});
}
// 6.4 提取 JSON 参数
{
  let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
  };
  let { id, status, data: number } = jsonData;

  console.log(id, status, number); // 42, "OK", [867, 5309]
}
// 6.5 函数参数的默认值
{
 let ajax = function(
    url,
    {
      async = true,
      beforeSend = function() {},
      cache = true,
      complete = function() {},
      crossDomain = false,
      global = true
      // ... more config
    } = {}
  ) {
    // ... do stuff
  };
}
// 6.6 遍历 Map 结构
{
  const map = new Map();
  map.set("first", "hello");
  map.set("second", "world");

  for (let [key, value] of map) {
    console.log(key + " is " + value);
  }
  // first is hello
  // second is world
}
// 6.7 输入模块的指定方法
{
  const { SourceMapConsumer, SourceNode } = require("source-map");
}
