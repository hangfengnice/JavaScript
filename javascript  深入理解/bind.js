Function.prototype.myBind = function(context){
  var self = this 
  var agrs = Array.prototype.slice.call(arguments,1)

  return function F(){
    var bindargs = [].slice.call(arguments)
    if(this instanceof F){
      return new self(...agrs,...bindargs)
    }
    return self.apply(context,agrs.contact(bindargs))
  }
}