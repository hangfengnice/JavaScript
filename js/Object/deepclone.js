var obj1 = {
  name:'1',
  dog: {
    name:'hah'
  },
  arr: ['nice','hh']
} 

var obj2={}
function deepclone(o1, o2){
  for( var key in o1){
   var item  = o1[key]
    if(Object.prototype.toString.call(item) === '[object Object]'){
      o2[key] = {}
      deepclone(item,o2[key])
    }else if(Object.prototype.toString.call(item) === '[object Array]'){
      o2[key] = []
      deepclone(item,o2[key])
    }else{
      o2[key] = o1[key]
    }
  }
}
deepclone(obj1, obj2)
obj1.dog.name = 'hhhh'

console.log(obj1)
console.log(obj2)
