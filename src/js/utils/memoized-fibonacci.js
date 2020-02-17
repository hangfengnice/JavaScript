var memorize = function(func, hasher) {
  var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!cache[address]) {
          cache[address] = func.apply(this, arguments);
      }
      return cache[address];
  };
  memoize.cache = {};
  return memoize;
};

var add = function (a, b, c) {
  return a + b + c
}
var memoizedAdd = memorize(add, function () {
  var args = Array.prototype.slice.call(arguments)
  return JSON.stringify(args)
})
console.log(memoizedAdd(1, 2, 3));
console.log(memoizedAdd(1, 2, 4));

var count = 0
var fibonacci = function (n) {
  count ++
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}
for (var i = 0; i <= 10; i ++ ) {
  fibonacci(i)
}
console.log(count);
fibonacci = memorize(fibonacci)

for( var i = 0; i <= 10; i ++) {
  fibonacci(i)
}
console.log(count);




