// var arr = new Array(3)
// arr[0] = "George"
// arr[1] = "John"
// arr[2] = "Thomas"

// console.log(arr) //[ 'George', 'John', 'Thomas' ]

// console.log(arr.join()) // George,John,Thomas

// console.log(arr.join('@')) //George@John@Thomas

// console.log(arr)  //[ 'George', 'John', 'Thomas' ]

// var arr = []
// function fn(){}
// var obj = {}
function isArray(arr){
  return Object.prototype.toString.call(arr) === '[object Array]'
}
function isFunction(fn){
  return Object.prototype.toString.call(fn) === '[object Function]'
}
function isObject(obj){
  return Object.prototype.toString.call(obj) === '[object Object]'
}

// console.log(isArray(arr))    // true
// console.log(isFunction(fn))  // true
// console.log(isObject(obj))   // true

function cloneObject(src){
  var result = src;
  if(isArray(src)){
    result =[];
    var resultLength = 0;
    for(var i = 0, len = src.length; i < len; i ++){
      result[resultLength ++] = cloneObject(src[i])
    }
  }else if(isObject(src)){
    result = {}
    for(i in src){
      if(src.hasOwnProperty(i)){
        result[i] = cloneObject(src[i])
      }
    }
  }
  return result
}

var srcObj = {
  a: 1,
  b: {
      b1: ["hello", "hi"],
      b2: "JavaScript"
  }
};
// var abObj = srcObj;
// var tarObj = cloneObject(srcObj);

// srcObj.a = 2;
// srcObj.b.b1[0] = "Hello";

// console.log(abObj.a);
// console.log(abObj.b.b1[0]);

// console.log(tarObj.a);      // 1
// console.log(tarObj.b.b1[0]);    // "hello"

// function uniqArray(arr){
//    var obj = {}
//    var arr1 = []

//    for(var i = 0,len = arr.length; i < len ; i ++{
//      var key = arr[i]
//      if(!obj[key]){
//        arr1.push(key)
//        obj[key] = true
//      }
//    }
//    return arr1
// }

function uniqArray(arr){
  var obj = {}
  var result = []
  for(var i = 0, len = arr.length; i < len; i ++){
    var key = arr[i];
    if(!obj[key]){
      result.push(key)
      obj[key] = true
    }
  }
  return result
}

// var arr = [11,2,2,2,3,3]
// console.log(uniqArray(arr))

function each(arr, fn){
  for(var i = 0, len = arr.length; i < len ; i ++){
    fn(arr[i],i)
  }
}

var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output)


