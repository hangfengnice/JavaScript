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
// import '../learnBooks/Javascript 5/浏览器模型/indexedDB'

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


// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, "done");
//   });
// }

// timeout(100).then(value => {
//   console.log(value);
// });

// const getJSON = function(url) {
//   const promise = new Promise(function(resolve, reject) {
//     const handler = function() {
//       if (this.readyState !== 4) {
//         return;
//       }
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//     const client = new XMLHttpRequest();
//     client.open("GET", url);
//     client.onreadystatechange = handler;
//     client.responseType = "json";
//     client.setRequestHeader("Accept", "application/json");
//     client.send();
//   });

//   return promise;
// };

// getJSON(
//   "https://tvax3.sinaimg.cn/crop.135.0.810.810.180/006LO43wly8frjay2sypvj30u00mita5.jpg"
// ).then(
//   function(json) {
//     console.log("Contents: " + json);
//   },
//   function(error) {
//     console.error("出错了", error);
//   }
// );

// const someAsyncThing = function() {
//   return new Promise(function(resolve, reject) {
//     // 下面一行会报错，因为x没有声明
//     resolve(x + 2);
//   });
// };

// someAsyncThing().then(function() {
//   console.log("everything is great");
// });

// setTimeout(() => {
//   console.log(123);
// }, 2000);

// const someAsyncThing = function() {
//   return new Promise(function(resolve, reject) {
//     // 下面一行会报错，因为x没有声明
//     resolve(x + 2);
//   });
// };

// someAsyncThing().then(function() {
//   return someOtherAsyncThing();
// }).catch(function(error) {
//   console.log('oh no', error);
//   // 下面一行会报错，因为 y 没有声明
//   y + 2;
// }).then(function() {
//   console.log('carry on');
// });
// 

// let obj = {
//   1: 'hello'
// }
// const p = Promise.reject(obj);

// p.then(null, (s) => console.log(s));

const thenable = {
  then(resolve, reject) {
    reject("出错了");
  }
};

Promise.reject(thenable).catch(e => {
  console.log(e)
  console.log(e === thenable);
});