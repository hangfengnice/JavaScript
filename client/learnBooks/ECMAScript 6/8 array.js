// 数组的扩展

// 1 扩展运算符 
{
  // 扩展运算符后面还可以放置表达式

  // 字符串
  console.log([..."hello"]); // [ "h", "e", "l", "l", "o" ]

  // 实现了 Iterator 接口的对象
}

// 2 Array.from()
{
  // 类似数组的对象（array-like object）和可遍历（iterable）的对象
  console.log(Array.from([1, , 2, , 3], n => n || 0)); // 第二个参数  [1, 0, 2, 0, 3]

  // 如果map函数里面用到了this关键字，还可以传入Array.from的第三个参数，用来绑定this。
}

// 3 Array.of()
{
  // Array.of方法用于将一组值，转换为数组
  Array.of(3, 11, 8); // [3,11,8]
  Array.of(3); // [3]
  Array.of(3).length; // 1
  
  // 模拟实现;
  function ArrayOf() {
    return [].slice.call(arguments);
  }
}

// 4 数组实例的 copyWithin()
{
  // Array.prototype.copyWithin(target, start = 0, end = this.length)
  // target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
  // start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
  // end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算

  [1, 2, 3, 4, 5].copyWithin(0, 3);
  // [4, 5, 3, 4, 5]
}

// 5 数组实例的 find() 和 findIndex()
{
  // 数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。

  // 数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1

  // 这两个方法都可以接受第二个参数，用来绑定回调函数的this对象。

  [NaN].indexOf(NaN); // -1

  [NaN].findIndex(y => Object.is(NaN, y)); // 0
}

  // 6 数组实例的 fill()
  {
    console.log(new Array(3).fill(10)); // [10, 10, 10]

    // fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置
    console.log(["a", "b", "c"].fill(7, 1, 2)); // ['a', 7, 'c']

    // 如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。
    let arr = new Array(3).fill([]);
    arr[0].push(5);
    console.log(arr); // [[5], [5], [5]]
  }
  
  


// 7 数组实例的 entries()，keys() 和 values()
{
  for (let [index, elem] of ["a", "b"].entries()) {
    console.log(index, elem); // 0 'a' 1 'b'
  } 
}

// 8 数组实例的 includes()
{
  // Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似
  console.log([NaN].includes(NaN)); // true

  // 简易的替代版
  const contains = (() =>
    Array.prototype.includes ? (arr, value) => arr.includes(value) : (arr, value) => arr.some(el => el === value))();
  console.log(contains(["foo", "bar"], "baz")); // => false
}


// 9 数组实例的 flat()，flatMap()
{
  // 如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数  默认为1
  console.log([1, [2, [3]]].flat(Infinity)); // [1, 2, 3]

  // 如果原数组有空位，flat()方法会跳过空位
  console.log([1, 2, , 4, 5].flat()); // [1, 2, 4, 5]

  // flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。

  // 相当于 [[2, 4], [3, 6], [4, 8]].flat()
  console.log([2, 3, 4].flatMap(x => [x, x * 2])); // [2, 4, 3, 6, 4, 8]

  // flatMap()只能展开一层数组
  // flatMap()方法还可以有第二个参数，用来绑定遍历函数里面的this
}

// 10 数组的空位
{
  console.log(0 in [undefined, undefined, undefined]); // true
  console.log(0 in [, , ,]); // false

  // forEach(), filter(), reduce(), every() 和some()都会跳过空位。
  // map()会跳过空位，但会保留这个值
  // join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。

  // ES6 则是明确将空位转为undefined。

  // Array.from方法会将数组的空位，转为undefined，也就是说，这个方法不会忽略空位。
  console.log(Array.from(["a", , "b"])); // ["a", undefined, "b"]
  // 扩展运算符（...）也会将空位转为undefined
  console.log([...["a", , "b"]]); // ["a", undefined, "b"]
}
