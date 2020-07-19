function bar(x, y) {
  var z
  foo(x)
  return [y, z]
  function foo(x){
    y ++
    z = x * y
  }
}
bar(5, 20)
let ret = bar(5, 20)
console.log(ret);
