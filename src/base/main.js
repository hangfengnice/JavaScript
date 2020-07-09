function log2(num) {
  return (num & (num - 1)) == 0
}

// console.log(log2(1));

function count(n) {
  let ret = 0
  while(n != 0) {
    ret += n & 1
    n >>>= 1
  }
  return ret
}

function sleep(time) {
  const start = Date.now()
  while(Date.now() - start < time) continue
}

function promiseSleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

// promiseSleep(2000).then(() => console.log('2 秒过去了'))

// console.log(+new Date(), Date.now(), new Date().getTime());




function test() {
  console.log('hello test');
}
console.log(test.toString(), test.valueOf()());

let ret = new Number(10).toString(2)
console.log(ret);

console.log('hell'.codePointAt(0));
