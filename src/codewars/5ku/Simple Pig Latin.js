function pigIt(str) {
  let reg = /(\w)(\w+)/g;

  return str.replace(reg, function (m, $1, $2) {
    return $2 + $1 + "ay";
  });
}

let ret = pigIt("Hello world !");
console.log(ret);
