let p1 = new Promise(function(resolve, reject) {
  resolve(42);
});

let p2 = new Promise(function(resolve, reject) {
  setTimeout(() => {
    reject(42);
  }, 200);
  
});

let p3 = new Promise(function(resolve, reject) {
  reject(44);
});

let p4 = Promise.all([p1, p2, p3]);

p4.catch(function(value) {
  console.log(Array.isArray(value))   // false
  console.log(value);                 // 43
});