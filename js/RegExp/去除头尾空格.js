// 去除头尾空格

var reg = /^\s*|\s*$/g;

var str = '   hello hh  ';

str = str.replace(reg,'')

console.log(str) // "hello hh"