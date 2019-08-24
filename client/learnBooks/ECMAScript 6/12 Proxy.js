// proxy

// 1 概述
{
  let obj = new Proxy(
    {},
    {
      get: function(target, key, receiver) {
        console.log(`getting ${key}!`);
        return Reflect.get(target, key, receiver);
      },
      set: function(target, key, value, receiver) {
        console.log(`setting ${key}!`);
        return Reflect.set(target, key, value, receiver);
      }
    }
  );
  obj.count = 1
  console.log(obj.count);
}

// ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例
{
  // let proxy = new Proxy(target, handler);
}
{
  // 作为构造函数，Proxy接受两个参数。第一个参数是所要代理的目标对象（上例是一个空对象），即如果没有Proxy的介入，操作原来要访问的就是这个对象；第二个参数是一个配置对象，对于每一个被代理的操作，需要提供一个对应的处理函数，该函数将拦截对应的操作。比如，上面代码中，配置对象有一个get方法，用来拦截对目标对象属性的访问请求。get方法的两个参数分别是目标对象和所要访问的属性。
  let proxy = new Proxy(
    {},
    {
      get(target, property) {
        console.log(target, property);
        return 35;
      }
    }
  );
  console.log(proxy.name); // 35

  // 如果handler没有设置任何拦截，那就等同于直接通向原对象。
  let target = {}
  let handle = {}
  let proxy1 = new Proxy(target, handle)
  proxy1.a = 'b'
  console.log(target.a)
}

{
  // 下面是 Proxy 支持的拦截操作一览，一共 13 种。

  let handler = {
    get: function(target, name) {
      if (name === "prototype") {
        return Object.prototype;
      }
      return "Hello, " + name;
    },

    apply: function(target, thisBinding, args) {
      console.log(target, thisBinding, args)
      return args[0];
    },

    construct: function(target, args) {
      return { value: args[1] };
    }
  };

  var fproxy = new Proxy(function(x, y) {
    return x + y;
  }, handler);

  console.log(fproxy(1, 2)); // 1
  new fproxy(1, 2); // {value: 2}
  fproxy.prototype === Object.prototype; // true
  fproxy.foo === "Hello, foo"; // true

  // get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
  // set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
  // has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
  // deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
  // ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
  // getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
  // defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
  // preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
  // getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
  // isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
  // setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
  // apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
  // construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
}

// 2 Proxy 实例的方法
{
  // get
  // get方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。
  let person = {
    name: "张三"
  };

  var proxy = new Proxy(person, {
    get: function(target, property) {
      if (property in target) {
        return target[property];
      } else {
        throw new ReferenceError('Property "' + property + '" does not exist.');
      }
    }
  });

  console.log(proxy.name); // "张三"
  // console.log(proxy.age); // 抛出一个错误

  // get方法可以继承;

  let proto = new Proxy(
    {},
    {
      get(target, propertyKey, receiver) {
        console.log("GET " + propertyKey);
        return target[propertyKey];
      }
    }
  );

  let obj = Object.create(proto);
  obj.foo; // "GET foo"

  // 下面的例子使用get拦截，实现数组读取负数的索引
  function createArray(...elements) {
    let handle = {
      get(target, propKey, receiver) {
        let index = Number(propKey);
        if (index < 0) {
          propKey = String(target.length + index);
        }
        return Reflect.get(target, propKey, receiver);
      }
    };

    let target = [];
    target.push(...elements);
    return new Proxy(target, handle);
  }

  let arr = createArray("a", "b", "c");
  console.log(arr[-1]);


  // 利用 Proxy，可以将读取属性的操作（get），转变为执行某个函数，从而实现属性的链式操作。
  // var pipe = (function () {
  //   return function (value) {
  //     var funcStack = []
  //     var oproxy = new Proxy({}, {
  //       get: function (pipeObject, fnName) {
  //         console.log(pipeObject, fnName)
  //         if(fnName === 'get') {
  //           return funcStack.reduce(function (val, fn) {
  //             return fn(val)
  //           }, value)
  //         }
  //         console.log(window)
  //         funcStack.push(window.fnName)
  //         console.log(window.fnName)
  //         return oproxy
  //       }
  //     })
  //     console.log(oproxy)
  //     return oproxy
  //   }
  // }())
  // console.log(pipe)
  // var double = n => n * 2;
  // pipe(3).double.get

  // 如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，否则通过 Proxy 对象访问该属性会报错。

  const target = Object.defineProperties(
    {},
    {
      foo: {
        value: 123,
        writable: false,
        configurable: false
      }
    }
  );

  const handler = {
    get(target, propKey) {
      return "abc";
    }
  };

  const proxy2 = new Proxy(target, handler);

  // proxy2.foo; // uncaught typeError
  
}
{
  // set 

  // set方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选
  // 如果目标对象自身的某个属性，不可写且不可配置，那么set方法将不起作用
}
{
  // apply

  // apply方法拦截函数的调用、call和apply操作
  // apply方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（this）和目标对象的参数数组

  let target = function() {
    return "i am the target";
  };
  let handle = {
    apply: function() {
      return "i am the proxy";
    }
  };
  var p = new Proxy(target, handle);
  console.log(p()); // i am the proxy

  // 下面代码中，每当执行proxy函数（直接调用或call和apply调用），就会被apply方法拦截。
  let twice = {
    apply(target, ctx, args) {
      console.log(target, ctx, args)
      return Reflect.apply(...arguments) * 2;
    }
  };
  function sum(left, right) {
    return left + right;
  }

  let proxy = new Proxy(sum, twice);
  console.log(proxy(1, 2)); // 6
  // console.log(proxy.call(null, 5, 6)); // 22
  // console.log(proxy.apply(null, [7, 8])); // 30

  // // 另外，直接调用Reflect.apply方法，也会被拦截。
  // console.log(Reflect.apply(proxy, null, [9, 10])); // 38
}
{
  // has

  // has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符

  // 如果原对象不可配置或者禁止扩展，这时has拦截会报错
  var obj = { a: 10 };
  Object.preventExtensions(obj);

  var p = new Proxy(obj, {
    has: function(target, prop) {
      // return false;
      // return true
      return prop in target
    }
  });

  console.log("a" in p);  // uncaught typeError

  // 值得注意的是，has方法拦截的是HasProperty操作，而不是HasOwnProperty操作，即has方法不判断一个属性是对象自身的属性，还是继承的属性。

// 另外，虽然for...in循环也用到了in运算符，但是has拦截对for...in循环不生效。
}
{
  // construct()
  var handler = {
    construct(target, args, newTarget) {
      return new target(...args);
    }
  };

  // construct方法可以接受两个参数。

  // target：目标对象
  // args：构造函数的参数对象
  // newTarget：创造实例对象时，new命令作用的构造函数（下面例子的p）

  // construct方法返回的必须是一个对象，否则会报错
  var p = new Proxy(function() {}, {
  construct: function(target, argumentsList) {
    return 1;
  }
  });

  // new p() uncaught typeError
}
{
  // deleteProperty()
  // deleteProperty方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除。
  // 注意，目标对象自身的不可配置（configurable）的属性，不能被deleteProperty方法删除，否则报错。

  var handler = {
    deleteProperty(target, key) {
      invariant(key, "delete");
      delete target[key];
      return true;
    }
  };
  function invariant(key, action) {
    if (key[0] === "_") {
      throw new Error(
        `Invalid attempt to ${action} private "${key}" property`
      );
    }
  }

  var target = { _prop: "foo" };
  var proxy = new Proxy(target, handler);
  // delete proxy._prop;  // uncaught error
} 
{
  // defineProperty

  // defineProperty方法拦截了Object.defineProperty操作。
  // 注意，如果目标对象不可扩展（non-extensible），则defineProperty不能增加目标对象上不存在的属性，否则会报错。另外，如果目标对象的某个属性不可写（writable）或不可配置（configurable），则defineProperty方法不得改变这两个设置。
}
{
  // getOwnPropertyDescriptor()

  // getOwnPropertyDescriptor方法拦截Object.getOwnPropertyDescriptor()，返回一个属性描述对象或者undefined。
  var handler = {
    getOwnPropertyDescriptor(target, key) {
      if (key[0] === "_") {
        return;
      }
      return Object.getOwnPropertyDescriptor(target, key);
    }
  };
  var target = { _foo: "bar", baz: "tar" };
  var proxy = new Proxy(target, handler);
  console.log(Object.getOwnPropertyDescriptor(proxy, "wat")); // undefined
  console.log(Object.getOwnPropertyDescriptor(proxy, "_foo")); // undefined
  console.log(Object.getOwnPropertyDescriptor(proxy, "baz")); // { value: 'tar', writable: true, enumerable: true, configurable: true }
}
{
  // getPrototypeOf()

  // getPrototypeOf方法主要用来拦截获取对象原型。具体来说，拦截下面这些操作。

  // Object.prototype.__proto__
  // Object.prototype.isPrototypeOf()
  // Object.getPrototypeOf()
  // Reflect.getPrototypeOf()
  // instanceof

  var proto = {};
  var p = new Proxy(
    {},
    {
      getPrototypeOf(target) {
        return proto;
      }
    }
  );
  Object.getPrototypeOf(p) === proto; // true

  // 注意，getPrototypeOf方法的返回值必须是对象或者null，否则报错。另外，如果目标对象不可扩展（non-extensible）， getPrototypeOf方法必须返回目标对象的原型对象。
}
{
  // isExtensible()

  // 这个方法有一个强限制，它的返回值必须与目标对象的isExtensible属性保持一致，否则就会抛出错误。
  var p = new Proxy(
    {},
    {
      isExtensible: function(target) {
        return false;
      }
    }
  );

  // Object.isExtensible(p); error

}
{
  // ownKeys()
  //   ownKeys方法用来拦截对象自身属性的读取操作。具体来说，拦截以下操作。

  // Object.getOwnPropertyNames()
  // Object.getOwnPropertySymbols()
  // Object.keys()
  // for...in循环
  let target = {
    a: 1,
    b: 2,
    c: 3
  };

  let handler = {
    ownKeys(target) {
      return ["a"];
    }
  };

  let proxy = new Proxy(target, handler);

  console.log(Object.keys(proxy)); // ["a"]

  // 注意，使用Object.keys方法时，有三类属性会被ownKeys方法自动过滤，不会返回。

  // 目标对象上不存在的属性
  // 属性名为 Symbol 值
  // 不可遍历（enumerable）的属性

  // ownKeys方法返回的数组成员，只能是字符串或 Symbol 值。如果有其他类型的值，或者返回的根本不是数组，就会报错。

  var obj = {};

  var p = new Proxy(obj, {
    ownKeys: function(target) {
      return [123, true, undefined, null, {}, []];
    }
  });

  // Object.getOwnPropertyNames(p);

  var obj = {};
  Object.defineProperty(obj, "a", {
    configurable: false,
    enumerable: true,
    value: 10
  });

  var p = new Proxy(obj, {
    ownKeys: function(target) {
      return ["b"];
    }
  });

  // Object.getOwnPropertyNames(p); // 12 proxy.js:430 Uncaught TypeError: 'ownKeys' on proxy: trap result did not include 'a'

  // 另外，如果目标对象是不可扩展的（non-extensible），这时ownKeys方法返回的数组之中，必须包含原对象的所有属性，且不能包含多余的属性，否则报错。

  var obj = {
    a: 1
  };

  Object.preventExtensions(obj);

  var p = new Proxy(obj, {
    ownKeys: function(target) {
      return ["a", "b"];
    }
  });

  // Object.getOwnPropertyNames(p); // 12 proxy.js:446 Uncaught TypeError: 'ownKeys' on proxy: trap returned extra keys but proxy target is non-extensible
}
{
  // preventExtensions();

  // preventExtensions方法拦截Object.preventExtensions()。该方法必须返回一个布尔值，否则会被自动转为布尔值。

  var proxy = new Proxy(
    {},
    {
      preventExtensions: function(target) {
        console.log("called");
        Object.preventExtensions(target);
        return true;
      }
    }
  );

  Object.preventExtensions(proxy);

}
{
  // setPrototypeOf()
  // setPrototypeOf方法主要用来拦截Object.setPrototypeOf方法。

  // 注意，该方法只能返回布尔值，否则会被自动转为布尔值。另外，如果目标对象不可扩展（non-extensible），setPrototypeOf方法不得改变目标对象的原型。
}

// 3 Proxy.revocable()
{
  // Proxy.revocable方法返回一个可取消的 Proxy 实例。

  let target = {};
  let handler = {};

  let { proxy, revoke } = Proxy.revocable(target, handler);

  proxy.foo = 123;
  proxy.foo; // 123

  // revoke();
  proxy.foo;
}

// 4 this 问题
