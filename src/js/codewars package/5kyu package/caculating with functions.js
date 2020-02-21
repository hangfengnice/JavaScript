['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].forEach(
  function (name, n){
    this[name] = function (f) {return f ? f(n): n}
  }
)

function plus(n) {return function(a) {return a + n}}

console.log(nine(plus(nine())));
