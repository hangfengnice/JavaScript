// object oriented

// 1 对象是什么
{
  // （1）对象是单个实物的抽象。

  // （2）对象是一个容器，封装了属性（property）和方法（method）。 
}

// 2 构造函数
{
  //   构造函数的特点有两个。

  // 函数体内部使用了this关键字，代表了所要生成的对象实例。
  // 生成对象的时候，必须使用new命令
}

// 3 new 命令
{
  // 3.1 基本用法
  {
    // 构造函数内部判断是否使用new命令，如果发现没有使用，则直接返回一个实例对象。
    function Fubar(foo, bar) {
      if (!(this instanceof Fubar)) {
        return new Fubar(foo, bar);
      }
      this._foo = foo;
      this._bar = bar;
    }

    console.log(Fubar(1, 2)._foo) // 1
    console.log(new Fubar(1, 2)._foo); // 1
  }
  
  // 3.2 new 命令的原理
  {
    // 使用new命令时，它后面的函数依次执行下面的步骤。

    // 创建一个空对象，作为将要返回的对象实例。
    // 将这个空对象的原型，指向构造函数的prototype属性。
    // 将这个空对象赋值给函数内部的this关键字。
    // 开始执行构造函数内部的代码。

    // 如果构造函数内部有return语句，而且return后面跟着一个对象，new命令会返回return语句指定的对象；否则，就会不管return语句，返回this对象


    // new命令简化的内部流程，可以用下面的代码表示
    function _new(constructor, params) {
      var args = [].slice.call(arguments)
      var constructor = args.shift()
      var context = Object.create(constructor.prototype)
      var result = constructor.apply(context, args) // 此时的 args 已经没有第一个参数了
      return (typeof result === 'object' && result !== null) ? result : context
    }

    function Person(name, age) {
      this.name = name
      this.age = age
    }
    var actor = _new(Person, "hangfeng", 20)
    console.log(actor)

  }

  // 3.3 new.target
  {
    // 函数内部可以使用new.target属性。如果当前函数是new命令调用，new.target指向当前函数，否则为undefined
  }

}

// 4 Object.create() 创建实例对象
{
  var person1 = {
    name: "张三",
    age: 38,
    greeting: function() {
      console.log("Hi! I'm " + this.name + ".");
    }
  };

  var person2 = Object.create(person1);

  console.log(person2.name); // 张三
  person2.greeting(); // Hi! I'm 张三
}

// this 关键字
{
  // 另一种方法是将this当作foreach方法的第二个参数，固定它的运行环境
  var o = {
    v: "hello",
    p: ["a1", "a2"],
    f: function f() {
      this.p.forEach(function(item) {
        console.log(this.v + " " + item);
      }, this);
    }
  };

  o.f();
  // hello a1
  // hello a2
}

var slice = Function.prototype.call.bind(Array.prototype.slice);
slice([1, 2, 3], 0, 1) // [1]

// 上面代码的含义就是，将Array.prototype.slice变成Function.prototype.call方法所在的对象，调用时就变成了Array.prototype.slice.call。类似的写法还可以用于其他数组方法。

{
  // instanceof 运算符
  // instanceof运算符返回一个布尔值，表示对象是否为某个构造函数的实例
}

{
//   in运算符返回一个布尔值，表示一个对象是否具有某个属性。它不区分该属性是对象自身的属性，还是继承的属性。

// 'length' in Date // true
// 'toString' in Date // true
// in运算符常用于检查一个属性是否存在。

// 获得对象的所有可遍历属性（不管是自身的还是继承的），可以使用for...in循环。
}

// 对象 clone
function copyObject(orig) {
  return Object.create(
    Object.getPrototypeOf(orig),
    Object.getOwnPropertyDescriptors(orig)
  );
}

let obj = {
  name: "hangfeng"
}

let obj1 = copyObject(obj)
console.log(obj1.name);
obj1.name = 'ying'
console.log(obj1.name, obj.name)