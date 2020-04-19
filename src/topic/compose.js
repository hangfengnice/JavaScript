var toUpperCase = function (x) {return x.toUpperCase()}
var hello = function (x) {return 'HELLO, ' + x }


function compose () {
  var args = arguments
  var start = args.length - 1
  return function () {
    var i = start
    var result = args[start].apply(this, arguments)
    while(i --) result = args[i].call(this, result)
    return result
  }
}
