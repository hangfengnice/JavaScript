

function* gen() {
  yield 1;
  return 2;
}

let g = gen();

console.log(g.next().value, g.next().value);

async function f() {
  try {
    await Promise.reject("出错了");
  } catch (e) {
    console.log(e)
  }
  return await Promise.resolve("hello world");
}

// f().then(v => console.log(v));

// console.log(Promise.resolve('1'))
//如果传入的 value 本身就是 Promise 对象，则该对象作为 Promise.resolve 方法的返回值返回。  
function fn(resolve){
    setTimeout(function(){
        resolve(123);
    },3000);
}
let p0 = new Promise(fn);

let p1 = Promise.resolve(p0);
// 返回为true，返回的 Promise 即是 入参的 Promise 对象。
console.log(p0 === p1);
