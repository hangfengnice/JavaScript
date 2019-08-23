// symbol

// 1 概述
{
  // 前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object
  // 新的原始数据类型 Symbol

  // 如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。
  const obj = {
    toString() {
      return "abc";
    }
  };
  console.log(Symbol(obj)); // Symbol(abc)

  // Symbol 值不能与其他类型的值进行运算，会报错。

  // 但是，Symbol 值可以显式转为字符串。 也可以转为布尔值，但是不能转为数值
}

// 2 Symbol.prototype.description
{
  const sym = Symbol("foo");

  console.log(sym.description);  // foo
}

// 3 作为属性名的 Symbol
{

}

// 4 实例：消除魔术字符串

// 5 属性名的遍历 Object.getOwnPropertySymbols
{
  // Reflect.ownKeys;
  let obj = {
    [Symbol("my_key")]: 1,
    enum: 2,
    nonEnum: 3
  };
  console.log(Reflect.ownKeys(obj)); //  ["enum", "nonEnum", Symbol(my_key)]
}

// 6 Symbol.for()，Symbol.keyFor()
{
  console.log(Symbol.for("bar") === Symbol.for("bar")); // true
  console.log(Symbol("bar") === Symbol("bar")); // false

  // Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key
  let s1 = Symbol.for("foo");
  console.log(Symbol.keyFor(s1)); // "foo"

  let s2 = Symbol("foo");
  console.log(Symbol.keyFor(s2)); // undefined

  // 需要注意的是，Symbol.for为 Symbol 值登记的名字，是全局环境的，可以在不同的 iframe 或 service worker 中取到同一个值
}


