function Person() {

}
// prototype是函数才会有的属性
Person.prototype.name = 'Kevin';
var person1 = new Person();
var person2 = new Person();
// console.log(person1.name) // Kevin
// console.log(person2.name) // Kevin

// __proto__
var person = new Person();
// console.log(person.__proto__ === Person.prototype); // true

//constructor
// console.log(Person === Person.prototype.constructor); // true

