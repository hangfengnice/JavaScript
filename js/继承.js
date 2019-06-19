function object(o){
  function F() {};
  F.prototype = o;
  return new F ()
}

function inherit(son,parent){
  // function F() {};
  // F.prototype = parent.prototype;

  // // var prototype = object(parent.prototype);
  // son.prototype = new F()

  // prototype.constructor = son
  function F() {};
  F.prototype = parent.prototype;
  son.prototype = new F()
  sonprototype.constructor = son
  

}

var obj = {
  fn : function(){
    console.log(obj.fn)
  }
}
obj.fn()