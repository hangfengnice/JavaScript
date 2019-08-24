// Reflect

// 1 Reflect对象的设计目的有这样几个
{
  // 1 从Reflect对象上可以拿到语言内部的方法
  // 2 修改某些Object方法的返回结果，让其变得更合理
  // 3 让Object操作都变成函数行为
  // 4 Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法
}

// 2 静态方法

// Reflect对象一共有 13 个静态方法。

// Reflect.apply(target, thisArg, args)
// Reflect.construct(target, args)
// Reflect.get(target, name, receiver)
// Reflect.set(target, name, value, receiver)
// Reflect.defineProperty(target, name, desc)
// Reflect.deleteProperty(target, name)
// Reflect.has(target, name)
// Reflect.ownKeys(target)
// Reflect.isExtensible(target)
// Reflect.preventExtensions(target)
// Reflect.getOwnPropertyDescriptor(target, name)
// Reflect.getPrototypeOf(target)
// Reflect.setPrototypeOf(target, prototype)

{
  // Reflect.get(target, name, receiver)
  // Reflect.get方法查找并返回target对象的name属性，如果没有该属性，则返回undefined

  // 如果name属性部署了读取函数（getter），则读取函数的this绑定receiver。
  var myObject = {
    foo: 1,
    bar: 2,
    get baz() {
      return this.foo + this.bar;
    }
  };
  var myReceiverObject = {
    foo: 4,
    bar: 4
  };
  console.log(Reflect.get(myObject, "baz", myReceiverObject)); // 8

  // 如果第一个参数不是对象，Reflect.get方法会报错
  // Reflect.get(1, "foo"); // Uncaught TypeError: Reflect.get called on non-object
}
{
  // Reflect.set(target, name, value, receiver)
  // Reflect.set方法设置target对象的name属性等于value。

  // 如果name属性设置了赋值函数，则赋值函数的this绑定receiver。

  var myObject = {
    foo: 4,
    set bar(value) {
      return (this.foo = value);
    }
  };

  var myReceiverObject = {
    foo: 0
  };

  Reflect.set(myObject, "bar", 1, myReceiverObject);
  myObject.foo; // 4
  myReceiverObject.foo; // 1

  // 如果 Proxy对象和 Reflect对象联合使用，前者拦截赋值操作，后者完成赋值的默认行为，而且传入了receiver，那么Reflect.set会触发Proxy.defineProperty拦截。

  // 如果第一个参数不是对象，Reflect.set会报错。
}
{
  // Reflect.has(obj, name)

  // Reflect.has方法对应name in obj里面的in运算符。
  var myObject = {
    foo: 1
  };
  // 旧写法
  console.log("foo" in myObject); // true

  // 新写法
  console.log(Reflect.has(myObject, "foo")); // true
  // 如果Reflect.has()方法的第一个参数不是对象，会报错
}
{
  // Reflect.deleteProperty(obj, name)
  // Reflect.deleteProperty方法等同于delete obj[name]，用于删除对象的属性。

  const myObj = { foo: "bar" };

  // 旧写法
  // delete myObj.foo;

  // 新写法
  console.log(Reflect.deleteProperty(myObj, "foo")); // true
  console.log(myObj) // {}

  // 该方法返回一个布尔值。如果删除成功，或者被删除的属性不存在，返回true；删除失败，被删除的属性依然存在，返回false。

  // 如果Reflect.deleteProperty()方法的第一个参数不是对象，会报错

}

{
  // Reflect.construct(target, args)

  // Reflect.construct方法等同于new target(...args)，这提供了一种不使用new，来调用构造函数的方法。

  function Greeting(name) {
    this.name = name;
  }

  // new 的写法
  // const instance = new Greeting("张三");

  // Reflect.construct 的写法
  const instance = Reflect.construct(Greeting, ['zhangsan']);
  console.log(instance)
  // 如果Reflect.construct()方法的第一个参数不是函数，会报错。
}

{
  // Reflect.getPrototypeOf(obj)
  // Reflect.getPrototypeOf方法用于读取对象的__proto__属性，对应Object.getPrototypeOf(obj)
  function FancyThing() {}
  const myObj = new FancyThing();

  // 旧写法
  console.log(Object.getPrototypeOf(myObj) === FancyThing.prototype); // true

  // 新写法
  console.log(Reflect.getPrototypeOf(myObj) === FancyThing.prototype); // true

  // Reflect.getPrototypeOf和Object.getPrototypeOf的一个区别是，如果参数不是对象，Object.getPrototypeOf会将这个参数转为对象，然后再运行，而Reflect.getPrototypeOf会报错。

  console.log(Object.getPrototypeOf(1)); // Number {[[PrimitiveValue]]: 0}
  // Reflect.getPrototypeOf(1); // 报错 // Uncaught TypeError: Reflect.getPrototypeOf called on non-object
}

{
  // Reflect.setPrototypeOf(obj, newProto);
  // Reflect.setPrototypeOf方法用于设置目标对象的原型（prototype），对应Object.setPrototypeOf(obj, newProto)方法。它返回一个布尔值，表示是否设置成功。

  const myObj = {};

  // 旧写法
  Object.setPrototypeOf(myObj, Array.prototype);

  // 新写法
  console.log(Reflect.setPrototypeOf(myObj, Array.prototype)); // true

  myObj.length; // 0

  // 如果无法设置目标对象的原型（比如，目标对象禁止扩展），Reflect.setPrototypeOf方法返回false。

  Reflect.setPrototypeOf({}, null);
  // true
  console.log(Reflect.setPrototypeOf(Object.freeze({}), null)); // false
}

{
  // Reflect.apply(func, thisArg, args)

  // Reflect.apply方法等同于Function.prototype.apply.call(func, thisArg, args)，用于绑定this对象后执行给定函数。

  const ages = [11, 33, 12, 54, 18, 96];

  // 旧写法
  // const youngest = Math.min.apply(Math, ages);
  // const oldest = Math.max.apply(Math, ages);
  // const type = Object.prototype.toString.call(youngest);

  // 新写法
  const youngest = Reflect.apply(Math.min, Math, ages);
  const oldest = Reflect.apply(Math.max, Math, ages);
  const type = Reflect.apply(Object.prototype.toString, youngest, []);
}

{
  // Reflect.defineProperty(target, propertyKey, attributes)

  // Reflect.defineProperty方法基本等同于Object.defineProperty，用来为对象定义属性。
  const p = new Proxy(
    {},
    {
      defineProperty(target, prop, descriptor) {
        console.log(descriptor);
        return Reflect.defineProperty(target, prop, descriptor);
      }
    }
  );

  p.foo = "bar";
  // {value: "bar", writable: true, enumerable: true, configurable: true}

  p.foo; // "bar"
}

{
  // Reflect.getOwnPropertyDescriptor(target, propertyKey);
  // Reflect.getOwnPropertyDescriptor基本等同于Object.getOwnPropertyDescriptor

  // Reflect.getOwnPropertyDescriptor和Object.getOwnPropertyDescriptor的一个区别是，如果第一个参数不是对象，Object.getOwnPropertyDescriptor(1, 'foo')不报错，返回undefined，而Reflect.getOwnPropertyDescriptor(1, 'foo')会抛出错误，表示参数非法。
}

{
  // Reflect.isExtensible(target);

  // Reflect.isExtensible方法对应Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展。

}

{
  // Reflect.preventExtensions(target)

  // Reflect.preventExtensions对应Object.preventExtensions方法，用于让一个对象变为不可扩展。它返回一个布尔值，表示是否操作成功。
}

{
  // Reflect.ownKeys(target);

  // Reflect.ownKeys方法用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。

  var myObject = {
    foo: 1,
    bar: 2,
    [Symbol.for("baz")]: 3,
    [Symbol.for("bing")]: 4
  };

  // 旧写法
  console.log(Object.getOwnPropertyNames(myObject)); // ['foo', 'bar']

  console.log(Object.getOwnPropertySymbols(myObject)); //[Symbol(baz), Symbol(bing)]

  // 新写法
  console.log(Reflect.ownKeys(myObject)); // ['foo', 'bar', Symbol(baz), Symbol(bing)]
}

// 3 实例：使用 Proxy 实现观察者模式 

{
const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}

const person = observable({
  name: "张三",
  age: 20
});

function print() {
  console.log(`${person.name}, ${person.age}`);
}
function sex() {
  console.log(`${person.name}, ${person.sex}`);
}

observe(print);
observe(sex)
person.name = "李四";
person.sex = 'male'
// 李四, 20
// 李四, undefined
// 李四, 20
// 李四, male
}