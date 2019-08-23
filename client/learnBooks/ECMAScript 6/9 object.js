// 对象的扩展

// 1 属性的简洁表示法
{
  // 除了属性简写，方法也可以简写
}

// 2 属性名表达式
{
  // es5 用标识符作为属性名
  // es6 把表达式放在方括号内

  // 注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]，这一点要特别小心

  const keyA = { a: 1 };
  const keyB = { b: 2 };

  const myObject = {
    [keyA]: "valueA",
    [keyB]: "valueB"
  };
  console.log(myObject); // {[object Object]: "valueB"}
}

// 3 方法的 name 属性
{
  const person = {
    sayName() {
      console.log("hello!");
    }
  };
  console.log(person.sayName.name); // sayName

  // 如果对象的方法使用了取值函数（getter）和存值函数（setter），则name属性不是在该方法上面，而是该方法的属性的描述对象的get和set属性上面，返回值是方法名前加上get和set
  const obj = {
    get foo() {},
    set foo(x) {}
  };
  // console.log(obj.foo.name); // Uncaught TypeError
  const descriptor = Object.getOwnPropertyDescriptor(obj, "foo");
  console.log(descriptor); //
  console.log(descriptor.get.name); // "get foo"
  console.log(descriptor.set.name); // "set foo"

  //  有两种特殊情况：bind方法创造的函数，name属性返回bound加上原函数的名字；Function构造函数创造的函数，name属性返回anonymous
  console.log(new Function().name); // "anonymous"
  const doSomething = function() {};
  console.log(doSomething.bind().name); // bound doSomething

  // 如果对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述。
  const key1 = Symbol("description");
  const key2 = Symbol();
  let obj1 = {
    [key1]() {},
    [key2]() {}
  };
  console.log(obj1[key1].name); // "[description]"
  console.log(obj1[key2].name); // ""
}

// 4 属性的可枚举性和遍历
{
  // Object.getOwnPropertyDescriptor
  let obj = { foo: 123 };
  console.log(Object.getOwnPropertyDescriptor(obj, "foo"));
  // {
  //    value: 123,
  //    writable: true,
  //    enumerable: true,
  //    configurable: true
  //  }

  // ES6 规定，所有 Class 的原型的方法都是不可枚举的
  console.log(Object.getOwnPropertyDescriptor(class {foo() {}}.prototype,"foo").enumerable); // false

  // 属性的遍历
  {
    // ES6 一共有 5 种方法可以遍历对象的属性
    // （1）for...in
    // for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

    // （2）Object.keys(obj)
    // Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

    //  3）Object.getOwnPropertyNames(obj)
    // Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

    // （4）Object.getOwnPropertySymbols(obj)
    // Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。

    // （5）Reflect.ownKeys(obj)
    // Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

    //以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。
    // 首先遍历所有数值键，按照数值升序排列。
    // 其次遍历所有字符串键，按照加入时间升序排列。
    // 最后遍历所有 Symbol 键，按照加入时间升序排列。

    console.log(Reflect.ownKeys({ [Symbol()]: 0, b: 0, 10: 0, 2: 0, a: 0 })); // ['2', '10', 'b', 'a', Symbol()]
  }

}

// 5 super 关键字
{
  //  this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象
  const proto = {
    foo: "hello"
  };
  const obj = {
    foo: "world",
    find() {
      return super.foo;
    }
  };

  Object.setPrototypeOf(obj, proto);
  console.log(obj.find()); // hello

  // super关键字表示原型对象时，只能用在对象的方法之中 只有对象方法的简写法可以让 JavaScript 引擎确认，定义的是对象的方法
  // JavaScript 引擎内部，super.foo等同于Object.getPrototypeOf(this).foo（属性）或Object.getPrototypeOf(this).foo.call(this)（方法）。

}

// 6 对象的扩展运算符
{
  // 解构赋值
  {
    // 扩展运算符的解构赋值，不能复制继承自原型对象的属性
    let o1 = { a: 1 };
    let o2 = { b: 2 };
    o2.__proto__ = o1;
    let { ...o3 } = o2;
    console.log(o3); // { b: 2 }
    console.log(o3.a); // undefined
  }

  // 扩展运算符
  {
    // 由于数组是特殊的对象，所以对象的扩展运算符也可以用于数组。
    let foo = { ...["a", "b", "c"] };
    console.log(foo); // {0: "a", 1: "b", 2: "c"}

    // 完整克隆一个对象，还拷贝对象原型的属性，可以采用下面的写法
    // 写法一
    let obj = {name: "hangfeng", age: 18}
    const clone1 = {
      __proto__: Object.getPrototypeOf(obj),
      ...obj
    };

    // 写法二
    const clone2 = Object.assign(
      Object.create(Object.getPrototypeOf(obj)),
      obj
    );

    // 写法三
    const clone3 = Object.create(
      Object.getPrototypeOf(obj),
      Object.getOwnPropertyDescriptors(obj)
    );
  }
}

// 对象的新增方法

// 1 Object.is()
{
  // Object.is 用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致 不同之处只有两个：一是+0不等于-0，二是NaN等于自身
  console.log(
    +0 === -0, //true
    NaN === NaN, // false

    Object.is(+0, -0), // false
    Object.is(NaN, NaN) // true
  );

  // ES5 可以通过下面的代码，部署Object.is
  Object.defineProperty(Object, "is", {
    value: function(x, y) {
      if (x === y) {
        // 针对+0 不等于 -0的情况
        return x !== 0 || 1 / x === 1 / y;
      }
      // 针对NaN的情况
      return x !== x && y !== y;
    },
    configurable: true,
    enumerable: false,
    writable: true
  });
}

// 2. Object.assign()
{
  // 如果只有一个参数，Object.assign会直接返回该参数。
  const obj = { a: 1 };
  console.log(Object.assign(obj) === obj); // true

  // 如果该参数不是对象，则会先转成对象，然后返回
  console.log(typeof Object.assign(2)); // "object"

  // 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。 // 如果undefined和null不在首参数，就不会报错
  let obj1 = { a: 1 };
  console.log(Object.assign(obj1, undefined) === obj1); // true

  // 除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果
  const v1 = "abc";
  const v2 = true;
  const v3 = 10;

  console.log(Object.assign({}, v1, v2, v3)); // {0: "a", 1: "b", 2: "c"}

  // Object.assign可以用来处理数组，但是会把数组视为对象
  console.log(Object.assign([1, 2, 3], [4, 5])); // [4, 5, 3]
}

// 3 Object.getOwnPropertyDescriptors()
{
  // ES5 的Object.getOwnPropertyDescriptor()方法会返回某个对象属性的描述对象（descriptor）ES2017 引入了Object.getOwnPropertyDescriptors()方法，返回指定对象所有自身属性（非继承属性）的描述对象。
  const obj = {
    foo: 123,
    get bar() {
      return "abc";
    }
  };

  console.log(Object.getOwnPropertyDescriptors(obj));
  // { foo:
  //    { value: 123,
  //      writable: true,
  //      enumerable: true,
  //      configurable: true },
  //   bar:
  //    { get: [Function: get bar],
  //      set: undefined,
  //      enumerable: true,
  //      configurable: true } }

  // Object.getOwnPropertyDescriptors()方法配合Object.defineProperties()方法，就可以实现正确拷贝
  const shallowMerge = (target, source) =>
    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
}
{
  let mix = object => ({
    with: (...mixins) =>
      mixins.reduce(
        (c1, mixin) => {
          console.log(c1, mixin)
          // Object.create(c, Object.getOwnPropertyDescriptors(mixin))
        },
        object
      )
  });

  // multiple mixins example
  let a = { a: "a" };
  let b = { b: "b" };
  let c = { c: "c" };
  let d = mix(c).with(a, b);

  // d.c; // "c"
  // d.b; // "b"
  // d.a; // "a"
}

// 4 __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
{
  // Object.setPrototypeOf()（写操作）、Object.getPrototypeOf()（读操作）、Object.create()（生成操作）代替
  // Object.setPrototypeOf()
  // 由于undefined和null无法转为对象，所以如果第一个参数是undefined或null，就会报错。

  // Object.setPrototypeOf(undefined, {});
  // TypeError: Object.setPrototypeOf called on null or undefined

  // Object.setPrototypeOf(null, {});
  // TypeError: Object.setPrototypeOf called on null or undefined

  // Object.getPrototypeOf()
}


// 5 Object.keys()，Object.values()，Object.entries()
{
  // ES2017 引入了跟Object.keys配套的Object.values和Object.entries，作为遍历一个对象的补充手段，供for...of循环使用

  const obj = Object.create(
    {},
    {
      p: {
        value: 42,
        enumerable: true
      }
    }
  );
  console.log(Object.values(obj)); // [42]

  // Object.values会过滤属性名为 Symbol 值的属性
  console.log(Object.values({ [Symbol()]: 123, foo: "abc" })) // ["abc"];

}

// 6 Object.fromEntries()
{
  console.log(Object.fromEntries([["foo", "bar"], ["baz", 42]])); // {foo: "bar", baz: 42}

  // 该方法的一个用处是配合URLSearchParams对象，将查询字符串转为对象

  console.log(Object.fromEntries(new URLSearchParams("foo=bar&baz=qux"))); // { foo: "bar", baz: "qux" }
}
