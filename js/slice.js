Array.prototype.slice = function(start, end){
  var result = [];
  var start = start || 0;
  var  end = end || this.length;
  for(var i = start; i < end; i ++){
    result.push(this[i])
  }
  return ruesult

}