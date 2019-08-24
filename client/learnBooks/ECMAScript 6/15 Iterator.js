// Iterator

// 遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

// Iterator 的作用有三个：
// 一是为各种数据结构，提供一个统一的、简便的访问接口；
// 二是使得数据结构的成员能够按某种次序排列；
// 三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费


// 2 默认 Iterator 接口

// 当使用for...of循环遍历某种数据结构时，该循环会自动去寻找 Iterator 接口
{
  // 原生具备 Iterator 接口的数据结构如下。

  // Array
  // Map
  // Set
  // String
  // TypedArray
  // 函数的 arguments 对象
  // NodeList 对象

  let arr = ["a", "b", "c"];
  let iter1 = arr[Symbol.iterator];
  console.log(iter1);
  let iter = arr[Symbol.iterator]();
  console.log(iter);

  iter.next(); // { value: 'a', done: false }
  iter.next(); // { value: 'b', done: false }
  iter.next(); // { value: 'c', done: false }
  iter.next(); // { value: undefined, done: true }

  // 一个对象如果要具备可被for...of循环调用的 Iterator 接口，就必须在Symbol.iterator的属性上部署遍历器生成方法（原型链上的对象具有该方法也可
  class RangeIterator {
    constructor(start, stop) {
      this.value = start;
      this.stop = stop;
    }

    [Symbol.iterator]() {
      return this;
    }

    next() {
      var value = this.value;
      if (value < this.stop) {
        this.value++;
        return { done: false, value: value };
      }
      return { done: true, value: undefined };
    }
  }

  function range(start, stop) {
    return new RangeIterator(start, stop);
  }

  for (var value of range(0, 3)) {
    console.log(value); // 0, 1, 2
  }
}

// 3 调用 Iterator 接口的场合
{
  // 调用 Iterator 接口（即Symbol.iterator方法），除了下文会介绍的for...of循环，还有几个别的场合

}
{
  let arr = [3, 5, 7];
  arr.foo = "hello";
  console.log(arr);

  for (let i in arr) {
    console.log(i); // "0", "1", "2", "foo"
  }

  for (let i of arr) {
    console.log(i); //  "3", "5", "7"
  }

  // 一种解决方法是，使用Object.keys方法将对象的键名生成一个数组，然后遍历这个数组。

  for (var key of Object.keys(someObject)) {
    console.log(key + ": " + someObject[key]);
  }
}

