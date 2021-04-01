function alias(name) {
  return function aliasClosure() {
      return this[name].apply(this, arguments);
  };
}


let time = new Date()
let year = time.getFullYear()
let month = time.getMonth() + 1
let date = time.getDate()

let res = `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`

console.log(res);