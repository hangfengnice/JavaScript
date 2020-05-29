var fetch = require("node-fetch");

// function* gen() {
//   var url = "https://api.github.com/users/github";
//   var result = yield fetch(url);
//   console.log(result.bio);
// }
// var g = gen();
// var result = g.next();

// result.value
//   .then(function (data) {
//     return data.json();
//   })
//   .then(function (data) {
//     g.next(data);
//   });

// function* gen() {
//   var r1 = yield fetch('https://api.github.com/users/github');
//   var json1 = yield r1.json()
//   var r2 = yield fetch('https://api.github.com/users/github/followers');
//   var json2 = yield r2.json()
//   var r3 = yield fetch('https://api.github.com/users/github/repos');
//   var json3 = yield r3.json()

//   console.log([json1.bio, json2[0].login, json3[0].full_name].join('\n'));
// }

// var g = gen()
// var result1 = g.next()

// result1.value.then(function (data){
//   return data.json()
// }).then(function (data) {
//   return g.next(data).value
// }).then(function (data) {
//   return data.json()
// }).then(function (data) {
//   return g.next(data).value
// }).then(function (data) {
//   return data.json()
// }).then(function (data){
//   g.next(data)
// })

// function run(gen) {
//   var g = gen()

//   function next(data) {
//     var result = g.next(data)
//     if (result.done) return
//     result.value.then(function (data) {
//       return data.json()
//     }).then(function (data) {
//       next(data)
//     })
//   }
//   next()
// }
// run(gen)

// function run(gen) {
//   var g = gen()
//   function next(data) {
//     var result = g.next(data)
//     if (result.done) return
//     result.value.then(function (data) {
//       next(data)
//     })
//   }
//   next()
// }
// run(gen)

function* gen() {
  var r1 = yield fetchData("https://api.github.com/users/github");
  var r2 = yield fetchData("https://api.github.com/users/github/followers");
  console.log([r1.data, r2.data].join("\n"));
}

function fetchData(url) {
  return function (cb) {
    setTimeout(function () {
      cb({ status: 200, data: url });
    }, 500);
  };
}
// var g = gen()
// var r1 = g.next()
// // r1.value(function (data) {
// //   var r2 = g.next(data)
// //   r2.value(function (data) {
// //     g.next(data)
// //   })
// // })

// function run(gen) {
//   var g = gen()
//   function next(data) {
//     var result = g.next(data)
//     if (result.done) return
//     result.value(next)
//   }
//   next()
// }
// run(gen)

// 第一版 run
// function run(gen) {
//   var gen = gen()
//   function next(data) {
//     var result = gen.next(data)
//     if (result.done) return
//     if (isPromise(result.value)) {
//       result.value.then(function (data) {
//         next(data)
//       })
//     } else {
//       result.value(next)
//     }
//   }
//   next()
// }

// 第二版
// function run(gen) {
//   var gen = gen()
//   return new Promise(function (resolve, reject) {
//     function next(data) {
//       try {
//         var result = g.next(data)
//       } catch (e) {
//         return reject(e)
//       }
//       if (result.done) return resolve(reject.value)
//       var value = toPromise(result.value)
//       value.then(function(data) {
//         next(data)
//       }, function(reason) {
//         reject(reason)
//       })
//     }
//     next()
//   })
// }

function run(gen) {
  return new Promise(function (resolve, reject) {
    if (typeof gen === "function") gen = gen();
    if (!gen || typeof gen.next !== "function") return resolve(gen);
    onFulfilled();
    function onFulfilled(res) {
      var ret;
      try {
        res = gen.next(res);
      } catch (e) {
        return reject(e);
      }
      next(res);
    }

    function onRejected(err) {
      var ret;
      try {
        res = gen.throw(err);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    }
    function next(ret) {
      if (ret.done) return resolve(ret.value);
      var value = toPromise(ret.value);
      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
      return onRejected(
        new TypeError(
          "You may only yield a function, promise " +
            'but the following object was passed: "' +
            String(ret.value) +
            '"'
        )
      );
    }
  });
}
function isPromise(obj) {
  return typeof obj.then === "function";
}

function toPromise(obj) {
  if (isPromise(obj)) return obj;
  if (typeof obj === "function") return thunkToPromise(obj);
  return obj;
}
function thunkToPromise(fn) {
  return new Promise(function (resolve, reject) {
    fn(function (err, res) {
      if (err) return reject(err);
      resolve(res);
    });
  });
}
