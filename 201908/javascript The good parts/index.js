Function.prototype.method = function (name, func){
  this.prototype[name] = func
  return this
}

String.method('deentityify', function(){
  var entity = {
    quot: '"',
    lt: "<",
    gt: '>'
  }

  return function(){
    return this.replace(/&([^&:]+);/g, function(a, b){
      console.log(a, b)
      var r = entity[b]
      return typeof r === 'string' ? r : a
    })
  }
}())

console.log("&lt;&quot;&gt;".deentityify())

function add(a, b){
  return a + b
}

// curry

Function.method('curry', function(){
  var slice = Array.prototype.slice,
      args = slice.apply(arguments),
      that = this;
  return function (){
    return that.apply(null, args.concat(slice.apply(arguments)))
  }
})

var add1 = add.curry(1)
console.log(add1(8))

//斐波那契数列

let fibonacci = function (n){
  return 2 < n ? n : fibonacci(n-1) + fibonacci(n -2)
}

// 记忆

let fibonacci1 = function (){
   let meno = [0, 1]
   let fib = function (n){
     let result = meno[n]
     if(typeof result !== 'number'){
       result = fib(n -1) + fib(n-2)
       meno[n] = result
     }
     return result
   }
   return fib
}()