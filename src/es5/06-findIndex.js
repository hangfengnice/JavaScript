function createIndexFinder(dir) {
  return function (array, predicate, context) {
    var index = dir > 0 ? 0 : array.length - 1
    for (; index >= 0 && index < array.length; index += dir) {
      if (predicate.call(context, array[index], index, array)) return index
    }
    return -1
  }
}
let findIndex = createIndexFinder(1)
let index = findIndex([1, 2, 3, 3], val => val > 2)
// console.log(index);

var obj = {
  name: 'hf',
  age: 123
}

for (name in obj) {
  console.log(name);
  if (name == 'name') {
    break
  } else {
    // console.log(name);
  }
}

function Person() {

}

let person = new Person()

// console.log('constructor' in person);
let pctor = person.constructor

console.log(Object.getPrototypeOf(pctor));

console.log(pctor instanceof pctor);

var a, b;

a = { foo: { b: { foo: { c: { foo: null } } } } };
b = { foo: { b: { foo: { c: { foo: null } } } } };
a.foo.b.foo.c.foo = a;
b.foo.b.foo.c.foo = b;

function eq(a, b, aStack, bStack) {
    if (typeof a == 'number') {
        return a === b;
    }

    return deepEq(a, b)
}

function deepEq(a, b) {

    var keys = Object.keys(a);
    var length = keys.length;
    var key;

    while (length--) {
        key = keys[length]

        // 这是为了让你看到代码其实一直在执行
        console.log(a[key], b[key])

        if (!eq(a[key], b[key])) return false;
    }

    return true;a

}

// eq(a, b)

var a = 4;
function test() {
  while(a --) {
    if (a == 2) return
    console.log(a);
  }
}
test()

