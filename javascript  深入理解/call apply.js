// Function.prototype.mycall = function (context){
//     var context = context || window
//     context.fn = this
//     let args = [...arguments].slice(1)
//     let result = context.fn(args)
//     delete context.fn
//     return result
// }

// let name='yingyin'

// let obj = {
//   name: "hangfeng"
// }

// function callName(){
//   console.log(this.name)
// }

// callName.mycall(obj)

Function.prototype.myApply = function (context){
  var context = context || window
  context.fn = this
  var result
  if(arguments[1]){
    result = context.fn(...arguments[1])
  }else{
    result = context.fn()
  }
  delete context.fn
  return result
}

var arr = [1,2,3,4]
function text(arr){
   console.log(arr)
}

test(arr)