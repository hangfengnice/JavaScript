var yesterday = new Date('March 6, 2019')
let ret = yesterday.toUTCString()

console.log(ret);

console.log(['2'].toString());

console.log([1].join(',,'));

console.log(Number('-0'));
console.log(Number('.0'));
console.log(Number(null), Number(undefined));
console.log([].valueOf());
console.log({}.valueOf());

console.log([null].toString());
console.log(Number([null]));

let arr = []
console.log(arr.length);
console.log(Boolean(' '));
