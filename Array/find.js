var user = [
  {
    id: 1,
    name: hangfeng
  },
  {
    id: 1,
    name: jiaying
  }
]

Array.prototype.myfind = function (callback) {
  for(var i = 0; i < this.length; i ++){
    if(callback(this[i],i)){
      
      return this[i]
    }
  }
}

var ret = user.myfind((item, id) => {
  return item.id == 1
})

console.log(ret)