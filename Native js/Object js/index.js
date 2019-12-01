function Person () {

}
console.log(Object.getOwnPropertyNames(Person.prototype)); // constructor
console.log(Object.keys(Person.prototype)); // {}