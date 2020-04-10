var toStirng = Object.prototype.toString;

function eq(a, b, aStack, bStack) {
  if (a === b) return a !== 0 || 1 / a === 1 / b;

  if (a == null || b == null) return false;

  if (a !== a) return b !== b;

  var type = typeof a;

  if (type !== "funciton" && type !== "object" && typeof b !== "object") return false;

  return deepEq(a, b, aStack, bStack);
}

function deepEq(a, b, aStack, bStack) {
  var className = toStirng.call(a);
  if (className !== toStirng.call(b)) return false;

  switch (className) {
    case "[object RegExp]":
    case "[object String]":
      return "" + a === "" + b;
    case "[object Number]":
      if (+a !== +a) return +b !== +b;
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case "[object Date]":
    case "[object Boolean]":
      return +a === +b;
  }

  var areArrays = className == '[object Array]'

  if (!areArrays) {
    if (typeof a != 'object' || typeof b != 'object') return false

    var aCtor = a.constructor, bCtor = b.constructor

    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && ('constructor' in a && 'constructor' in b)) return false
  }

  aStack = aStack || []
  bStack = bStack || []

  var length = aStack.length

  while(length --) {
    if(aStack[length] === a) {
      return bStack[length] === b
    }
  }

  aStack.push(a)
  bStack.push(b)

  if(areArrays) {
    length = a.length
    if (length != b.length) return false

    while(length --) {
      if (!eq(a[length], b[length], aStack, bStack)) return false
    }
  } else {
    var keys = Object.keys(a), keys
    length = keys.length

    if (Object.keys(b).length !== length) return false
    while(length --) {
      key = keys[length]
      if (!(b.hasOwnProperty(key) && eq(a[key], b[key], aStack, bStack))) return false
    }
  }
  aStack.pop()
  bStack.pop()
  return true
}

// console.log(eq(0, 0)) // true
// console.log(eq(0, -0)) // false

// console.log(eq(NaN, NaN)); // true
// console.log(eq(Number(NaN), Number(NaN))); // true

// console.log(eq('Curly', new String('Curly'))); // true

// console.log(eq([1], [1])); // true
// console.log(eq({ value: 1 }, { value: 1 })); // true

// var a, b;

// a = { foo: { b: { foo: { c: { foo: null } } } } };
// b = { foo: { b: { foo: { c: { foo: null } } } } };
// a.foo.b.foo.c.foo = a;
// b.foo.b.foo.c.foo = b;

// console.log(eq(a, b)) // true

