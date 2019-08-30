import './assets/index.css'

// import '../learnBooks/javascript edition 3/3basicData'
// import '../learnBooks/javascript edition 3/4variableScope'
// import '../learnBooks/javascript edition 3/5referenceType'
// import '../learnBooks/javascript edition 3/6object-oriented'
// import '../learnBooks/javascript edition 3/7functionExpression'
// import '../learnBooks/javascript edition 3/8BOM'
// import '../learnBooks/javascript edition 3/9clientDection'
// import '../learnBooks/javascript edition 3/10DOM'
// import "../learnBooks/javascript edition 3/11DOMExtension";

// import '../learnBooks/Javascript 5/6 Object-oriented'
// import "../learnBooks/Javascript 5/7 asynchronous";
// import '../learnBooks/Javascript 5/8 DOM/1 Node-interface'
// import '../learnBooks/Javascript 5/浏览器模型/navigator对象, screen对象'
// import '../learnBooks/Javascript 5/浏览器模型/3 Cookie'
// import '../learnBooks/Javascript 5/浏览器模型/4 XMLHttpRequest 对象'

// import '../learnBooks/ECMAScript 6/1 let const'
// import '../learnBooks/ECMAScript 6/2 destructuring'
// import "../learnBooks/ECMAScript 6/3 stringExtension"
// import '../learnBooks/ECMAScript 6/4 String'
// import '../learnBooks/ECMAScript 6/5 RegExp'
// import '../learnBooks/ECMAScript 6/6 Number'
// import '../learnBooks/ECMAScript 6/7 Function'
// import '../learnBooks/ECMAScript 6/8 Array'
// import '../learnBooks/ECMAScript 6/9 Object'
// import '../learnBooks/ECMAScript 6/10 Symbol'
// import '../learnBooks/ECMAScript 6/11 Set Map'
// import '../learnBooks/ECMAScript 6/12 Proxy'
// import '../learnBooks/ECMAScript 6/13 Reflect'
// import '../learnBooks/ECMAScript 6/14 Promise'
// import '../learnBooks/ECMAScript 6/15 Iterator'
// import '../learnBooks/ECMAScript 6/16 Generator'

// import '../learnBooks/You don\'t know JS/this--object--protorype'
// import '../learnBooks/You don\'t know JS/types && grammar'

var rejectTh = {
  then: function(resolved, rejected) {
    console.log("ok")
  },
}

let rejectPr = Promise.resolve(rejectTh)
console.log(rejectPr)
rejectPr.then(res => {
console.log(res)
},
error => {
  console.log(error)
})

// function* foo(x, y) {
//   return x * y
// }

// var it = foo(6, 7)

// var res = it.next()
// console.log(res)
// console.log(res.value)

// var something = (function () {
//   var nextVal
//   return {
//     [Symbol.iterator]: function() {
//       console.log(this)
//       return this
//     },
//     next: function() {
//       if(nextVal === undefined) {
//         nextVal = 1
//       } else {
//         nextVal = (3 * nextVal) + 6
//       }

//       return {done: false, value: nextVal}
//     }
//   }
// })()

// for(var v of something) {
//   console.log(v)
//   if (v > 1000) {
//     break
//   }
// }

Promise.resolve().then(res => {
  console.log(res)
})

// function* run (gen) {
//   let args = [].slice.call(arguments, 1), it;
//   it = gen.apply(this, args)
//   return Promise.resolve()
//   .then(function handleNext(value){
//     var next = it.next(value)
//     return (function)
//   })
// }

var a22 = Symbol('hello')
console.log(typeof a22)

