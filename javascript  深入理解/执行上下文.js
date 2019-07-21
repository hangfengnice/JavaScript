// function foo() {
//   console.log(a);   // 报错 下方的a 没有进行 var 
//   a = 1;
// }

// foo(); // ???

// function bar() {
//   a = 1;
//   console.log(a);
// }
// bar(); // ???

// ------------------------------------
//第二小题
// console.log(foo);  //[Function: foo]

// function foo(){
//     console.log("foo"); 
// }

// var foo = 1;


// function foo() {
//   console.log(this)
// }

// foo(); // MemberExpression 是 foo

// function foo() {
//   return function() {
//       console.log(this)
//   }
// }

// foo()(); // MemberExpression 是 foo()

// var foo = {
//   bar: function () {
//       return this;
//   }
// }

var value = 1;

var foo = {
  value: 2,
  bar: function () {
    return this.value;
  }
}

//示例1
console.log(foo.bar()); // 2
//示例2
console.log((foo.bar)()); // 2
//示例3
console.log((foo.bar = foo.bar)()); // 1
//示例4
console.log((false || foo.bar)()); // 1
//示例5
console.log((foo.bar, foo.bar)()); // 1

