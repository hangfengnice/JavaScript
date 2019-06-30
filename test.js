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
// each(arr, output)

function hasClass(element, className){
  var classNames = element.className;
  if(!classNames){
    return false
  }
  classNames = classNames.split(/\s+/);
  for(var i = 0, len = classNames.length; i < len; i ++){
    if(classNames[i] === className){
      return true
    }
  }
  return false
}

function addClass(element, className){
  if(!hasClass(element, className)){
    element.className = element.className ? [element.className, className].join(' ') : className
  }
}

function removeClass(element, className){
  if(className && hasClass(element, className)){
    var classNames = element.className.split(/\s+/);
    for(var i = 0, len = classNames.length; i < len; i ++){
      if(classNames[i] === className){
        classNames.splice(i, 1)
        break
      }
    }
  }
  element.className = classNames.join(' ')
}

function isSiblingNode(element, siblingNode) {
  for(var node = element.parentNode.firstChild; node; node = node.nextSibling){
    if( node === siblingNode){
      return true
    }
  }
  return false
}




var foo = {
  name: 'Selina'
}
var name = 'Chirs';
function bar(job, age) {
  console.log(this.name);
  console.log(job, age);
}
bar.call(foo, 'programmer', 20);
// Selina programmer 20
bar.call(null, 'teacher', 25);


