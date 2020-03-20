function Person() {

}
Person.prototype = {
  constructor: Person
}
var instance = new Person()
for (var prop in instance) {
  console.log(prop)
}

console.log(Object.getPrototypeOf(instance))
console.log(Object.getPrototypeOf(Person))
