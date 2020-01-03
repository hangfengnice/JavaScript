const object1 = {
  userid: 123,
  usrname: '王二',
  tel: '13208033621'
}
// 1. encodeURI() 将元字符和语义字符之外的字符，都进行转义
//    encodeURIComponent()

// 2. 
console.log(new URLSearchParams(object1).toString());
console.log(Object.entries(object1));

Object.entries(object1).map(kv => `${kv[0]}=${encodeURIComponent(kv[1])}`).join('&')

// 3. location.search

// 4. 
let obj1 = {}

for (let [key, value] of new URLSearchParams(location.search).entries()) {
  obj1[key] = value
}

// 5
let string = '?name=hello&name=hangfeng&wife=yingying'
let urlSearchParams1 = new URLSearchParams(string)
let obj2 = {}

for (let key of urlSearchParams1.keys()) {
  obj2[key] = urlSearchParams1.getAll(key).length > 1 ? urlSearchParams1.getAll(key) : urlSearchParams1.get(key)
}

console.log(obj2);



// let obj
// let params1 = new URLSearchParams(location.search)
// for (let array of params1) {
//   if (obj[array[0]]) {
//     let value = obj[array[0]]

//     // obj[array[0]] = value [].push(value)
//   } else {
//     obj[array[0]] = array[1]
//   }
// }

