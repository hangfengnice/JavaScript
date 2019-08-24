
// Set 和 Map 数据结构

// 1 set

// 基本用法
{
  // ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
  // Set本身是一个构造函数，用来生成 Set 数据结构

  // Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
  // 数组去重
  const set = new Set([1, 2, 3, 4, 4]);
  console.log([...set]); // [1, 2, 3, 4]
  // 字符串去重
  console.log([...new Set("ababbc")].join("")); // "abc"

  // size add 可以链式调用 在 Set 内部，两个NaN是相等
  let set1 = new Set();
  let a = NaN,
    b = NaN,
    c = 1;
  set1
    .add(a)
    .add(b)
    .add(c);
  console.log(set1, set.size); // {NaN, 1} 4

  // 两个空对象不相等，所以它们被视为两个值
  console.log(new Set().add({}).add({}).size); // 2
}

// Set 实例的属性和方法
{
  // Set.prototype.constructor：构造函数，默认就是Set函数。
  // Set.prototype.size：返回Set实例的成员总数。
  // Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。
  // Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
  // Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
  // Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
  // Set.prototype.clear()：清除所有成员，没有返回值。

  // Array.from方法可以将 Set 结构转为数组
  // 数组去重
  console.log(Array.from(new Set([1, 2, 3, 4, 5, 4]))); // [1, 2, 3, 4, 5]
}

// 遍历操作
{
  // Set.prototype.keys()：返回键名的遍历器
  // Set.prototype.values()：返回键值的遍历器
  // Set.prototype.entries()：返回键值对的遍历器
  // Set.prototype.forEach()：使用回调函数遍历每个成员

  // 由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致
  let set = new Set(["red", "green", "blue"]);

  for (let item of set.keys()) {
    console.log(item); // red green blue
  }

  for (let item of set.values()) {
    console.log(item); // red green blue
  }

  for (let item of set.entries()) {
    console.log(item); // ["red", "red"] ["green", "green"] ["blue", "blue"]
  }

  // forEach()  forEach方法还可以有第二个参数，表示绑定处理函数内部的this对象
  console.log(
    new Set([1, 4, 9]).forEach((value, key) => console.log(key + " : " + value))
  ); // 1:1 4:4 9:9

  // 遍历的应用
  // Set 可以很容易地实现并集（Union）、交集（Intersect）和差集

  // 提供了两种方法，直接在遍历操作中改变原来的 Set 结构
  console.log(new Set([...new Set([1, 2, 3])].map(val => val * 2))); // 2, 4, 6

  // 方法二
  console.log(new Set(Array.from(new Set([1, 2, 3]), val => val * 2)));
}

// 2 WeakSet

// WeakSet 的成员只能是对象，而不能是其他类型的值  WeakSet 中的对象都是弱引用
{
  // WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
  // WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
  // WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中
  // WeakSet 没有size属性，没有办法遍历它的成员
}

// 3 Map

// 含义和基本用法
{
  // 如果对同一个键多次赋值，后面的值将覆盖前面的值

  // 如果读取一个未知的键，则返回undefined

  // 实例的属性和操作方法
  // size 属性

  // 遍历方法;

  // Map.prototype.keys()：返回键名的遍历器。
  // Map.prototype.values()：返回键值的遍历器。
  // Map.prototype.entries()：返回所有成员的遍历器。
  // Map.prototype.forEach()：遍历 Map 的所有成员。

  // Map 的遍历顺序就是插入顺序。

  // Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）

  const map = new Map([[1, "one"], [2, "two"], [3, "three"]]);

  console.log([...map.keys()]); // [1, 2, 3]
  console.log([...map.values()]); // ['one', 'two', 'three']
  console.log([...map.entries()], [...map]); // [[1,'one'], [2, 'two'], [3, 'three']] * 2

  // 结合数组的map方法、filter方法，可以实现 Map 的遍历和过滤（Map 本身没有map和filter方法）。
  const map0 = new Map()
    .set(1, "a")
    .set(2, "b")
    .set(3, "c");

  console.log(new Map([...map0].filter(([k, v]) => k < 3))); // 产生 Map 结构 {1 => 'a', 2 => 'b'}
  console.log(new Map([...map0].map(([k, v]) => [k * 2, "_" + v]))); // 产生 Map 结构 {2 => '_a', 4 => '_b', 6 => '_c'}

  // forEach方法还可以接受第二个参数，用来绑定this
}

// 4 WeakMap

// WeakMap结构与Map结构类似，也是用于生成键值对的集合。
{
  // WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名
  // get()、set()、has()、delete()。
}
