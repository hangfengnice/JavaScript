let factorial = (function f(num){
  if (num <= 1) {
    return num
  } else {
    return num * f(num -1)
  }
})
console.log(factorial(2));