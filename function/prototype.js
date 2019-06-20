function Person(name){
  this.name = name
}
var man = new Person('hanfeng')

Person.prototype.sayName = function() {
  console.log(this.name)
}

man.sayName()

742076038