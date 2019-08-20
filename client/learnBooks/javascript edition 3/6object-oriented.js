// object-oriented
// 数据属性
let person = {
  age: 18
}
Object.defineProperty(person, "name", {
  configurable: true,
  // writable: true,
  // enumerable: true,
  value: 'hangfeng'
})
console.log(person)  // hangfeng 18
person.name = 'yingying'
person.age = 19
console.log(person)  // hangfeng 19

// var book = {
//   _year: 2018,
//   edition: 1
// }
// chrome 不支持了/
// book.__defineGetter_("year", () => this._year)

// console.log(book.year)

// 访问器属性
let book = {}
Object.defineProperties(book, {
  _year: {
    writable: true,
    value: 2019
  },
  edition: {
    writable: true,
    value: 1
  },
  year: {
    get() {
      return this._year
    },
    set(newValue) {
      if(newValue > 2019)
      this._year = newValue
      this.edition += 1
    }
  }
})
console.log(book)
book.year = 2020
console.log(book)
book.year = 2021;
console.log(book)

// 读取属性的特性 Object.getOwnPropertyDescriptor()
console.log(Object.getOwnPropertyDescriptor(book, '_year'))
console.log(Object.getOwnPropertyDescriptor(book, "year"));

// prototype

// function Person() {

// }

// Person.prototype.name = 'hangfeng'
// Person.prototype.age = 18;

// let person1 = new Person()
// let person2 = new Person()

// person1.name = 'yingying'
// console.log(person1.name, person2.name)
// delete person1.name
// console.log(person1.name, person2.name);
// console.log(Object.getOwnPropertyDescriptor(Person.prototype, "age"))
// for (var prop in person1) {
//   console.log(prop)
// }

function Person() {

}

Person.prototype = {
  construction: Person,
  name: "hangfeng",
  age: 18,
  job: "web",
  friends: ['yingying', 'zhouzhou'],
  sayName() {
    console.log(this.name)
  }
}

let person1 = new Person()
let person2 = new Person();

function PersonParasitic(name, age) {
  var o = new Object()
  o.name = name
  o.age = age
  o.sayName  = function () {
    return this.name
  }
  return o
}

var friend = PersonParasitic('hangfeng', 18)
console.log(friend, friend.sayName())

// 原型链
// function SuperType() {
//   this.property = true
// }
// SuperType.prototype.getSuperValue = function () {
//   return this.property
// }

// function SubType() {
//   this.subproperty = false
// }

// SubType.prototype = new SuperType()
// SubType.prototype.getSubValue = function () {
//   return this.subproperty
// }

// let instance = new SubType()
// console.log(instance)
// console.log(instance.getSuperValue())
// console.log(SubType.prototype.isPrototypeOf(instance))

// 组合继承

// function SuperType(name) {
//   this.name = name
//   this.colors = ['red', 'blue']
// }
// SuperType.prototype.sayName = function () {
//   console.log(this.name)
// }
// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age = age
// }

// SubType.prototype = new SuperType()
// SubType.prototype.constructor = SubType
// SubType.prototype.sayAge = function () {
//   console.log(this.age)
// }
// let instance1 = new SubType('hangfeng', 18)
// console.log(instance1)
// let person3 = {
//   name: 'hangfeng',
//   age: 18
// }

// var anotherPerson = Object.create(person3, {
//   sex: {
//     value: 'male'
//   }
// });
// console.log(anotherPerson)

function Parent(name) {
  this.name = name
  this.colors = ['red']
}
function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child
  }
})

const instance = new Child('hangfeng', 20)
instance.colors.push('blue')
const instance1 = new Child("yingying", 20);
instance1.colors.push("lightbule");
console.log(instance, instance1)
