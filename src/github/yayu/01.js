// function Person() {}

// var person = new Person();

// // person.name = "kevin";
// // console.log(person.name);

// // prototype

// Person.prototype.name = 'kevin'

// var person1 = new Person()
// var person2 = new Person()

// console.log(person1.name);
// console.log(person2.name)

// // console.log(person1.__proto__ === Person.prototype);
// // console.log(Person === Person.prototype.constructor);
// console.log(Object.getPrototypeOf(person1) == Person.prototype);

function Person () {

}

Person.prototype.name = 'kevin'

var person = new Person()

person.name = 'daliy'

console.log(person.name);

delete person.name

console.log(person.name);

console.log(Function.__proto__ === Function.prototype);
