// Generator

function* helloWorldGenerator() {
  yield "hello";
  yield "world";
  return "ending";
}

var hw = helloWorldGenerator();
// 上面代码定义了一个 Generator 函数helloWorldGenerator，它内部有两个yield表达式（hello和world），即该函数有三个状态：hello，world 和 return 语句（结束执行）。

// yield 表达式

// 与 Iterator 接口的关系
{
  var myIterable = {};
  myIterable[Symbol.iterator] = function*() {
    yield 1;
    yield 2;
    yield 3;
  };

  console.log([...myIterable]);

  // Generator 函数执行后，返回一个遍历器对象。该对象本身也具有Symbol.iterator属性，执行后返回自身。
  function* gen() {
    // some code
  }

  var g = gen();
  console.log(g[Symbol.iterator]() === g); // true
}

// 2 next 方法的参数
{
  function* foo(x) {
    var y = 2 * (yield x + 1);
    var z = yield y / 3;
    return x + y + z;
  }

  var a = foo(5);
  a.next(); // Object{value:6, done:false}
  a.next(); // Object{value:NaN, done:false}
  a.next(); // Object{value:NaN, done:true}

  var b = foo(5);
  b.next(); // { value:6, done:false }
  b.next(12); // { value:8, done:false }
  b.next(13); // { value:42, done:true }
}
{
  // 再看一个通过next方法的参数，向 Generator 函数内部输入值的例子
  function* dataConsumer() {
    console.log("beforeStarted")
    console.log("Started");
    console.log(`1. ${yield}`);
    console.log(`2. ${yield}`);
    return "result";
  }

  let genObj = dataConsumer();
  genObj.next();
  // Started

  // genObj.next("a");
  // // 1. a
  // genObj.next("b");
  // // 2. b
}

// 3 for...of 循环
{
  function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
  }

  for (let v of foo()) {
    console.log(v); // 1 2 3 4 5
  }

  // 上面代码使用for...of循环，依次显示 5 个yield表达式的值。这里需要注意，一旦next方法的返回对象的done属性为true，for...of循环就会中止，且不包含该返回对象，所以上面代码的return语句返回的6，不包括在for...of循环之中

  // Generator 函数和for...of循环，实现斐波那契数列的例子
  function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
      yield curr;
      [prev, curr] = [curr, prev + curr];
    }
  }

  for (let n of fibonacci()) {
    if (n > 1000) break;
    console.log(n);
  }

  // 是对象可以使用 generator
  function* objectEntries(obj) {
    let propKeys = Reflect.ownKeys(obj);

    for (let propKey of propKeys) {
      yield [propKey, obj[propKey]];
    }
  }

  let jane = { first: "Jane", last: "Doe" };

  for (let [key, value] of objectEntries(jane)) {
    console.log(`${key}: ${value}`);
  }

  // 方法2 
  function* objectEntries1() {
    let propKeys = Object.keys(this);

    for (let propKey of propKeys) {
      yield [propKey, this[propKey]];
    }
  }

  let jane1 = { first: "Jane", last: "Doe" };

  jane1[Symbol.iterator] = objectEntries1;

  for (let [key, value] of jane1) {
    console.log(`${key}: ${value}`);
  }
  // first: Jane
  // last: Doe
}


