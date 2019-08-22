const arr1 = [1,2,2]
const arr2 = [3,4,5]

// 字符串
console.log([...'hello']) // [ "h", "e", "l", "l", "o" ]

// Array.from() 类似数组的对象（array-like object）和可遍历（iterable）的对象

console.log(Array.from([1, , 2, , 3], n => n || 0)); // 第二个参数  [1, 0, 2, 0, 3]
// 对象必须要有 length

console.log(Array.from("hello")); //["h", "e", "l", "l", "o"]

// Array.of() 将一组值 转换为 数组
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8); // [3, 11, 8]
  // 数组实例的 find() 和 findIndex()
  // find 有数值 无 undefined  findIndex 有 index 无 -1

  [NaN].indexOf(NaN);
  // -1

  [NaN].findIndex(y => Object.is(NaN, y)); // 0

  // fill  fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置
  console.log(new Array(3).fill(10));


  // 数组实例的 entries()，keys() 和 values()

  // includes()  该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。
[1, 2, 3].includes(2);    // true
[1, 2, 3].includes(4);     // false
[1, 2, NaN].includes(NaN); // true

// 数组拉平 flat() flatMap()

console.log([1, 2, [3, 4]].flat());  // [1, 2, 3, 4]
console.log([1, [2, [3]]].flat(Infinity));
console.log([1, 2, , 4, 5].flat());  // 跳过空位

//Array.prototype.map()），然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。