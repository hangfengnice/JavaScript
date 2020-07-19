// 工厂模式
function createPerson(name, age, job) {
  var o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.say = function () {
    console.log(this.name);
  }
  return o
}

// 构造函数模式
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.say = function () {
    console.log(this.name);
  }
}

// 原型模式 ！需要注意 重写原型对象的时候
function Person() {

}
Person.prototype.name = 'name'
Person.prototype.age = 18
Person.prototype.say = function () {
  console.log(this.name);
}

// 组合使用构造函数和原型模式
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype = {
  constructor: Person,
  say() {
    console.log(this.name);
  }
}

// 动态原型模式
function Person(name) {
  this.name = name
  if (this.say != 'function') {
    Person.prototype.say = function () {
      console.log(this.name);
    }
  }
}

// 寄生构造模式 !用于 Array
function Person(name, age) {
  var o = new Object()
  o.name = name
  return o
}

function SpecialArray() {
  var values = new Array()
  values.push.apply(values, arguments)
  values.toPipedString = function () {
    return values.join('|')
  }
  return values
}

// 稳妥构造函数模式 ! 只有通过 o.say 才能访问 name
function Person(name) {
  var o = new Object()
  o.say = function () {
    console.log(name);
  }
  return o
}
