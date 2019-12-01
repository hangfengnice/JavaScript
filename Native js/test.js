let person = {
  name: 'Nicholas',
  friends: ["Shellby", "COunt", "Van"]
}

let anotherPerson = Object.create(person)
anotherPerson.name = "greg"
anotherPerson.friends.push("ROb")

let yetAnotherPerson = Object.create(person)

yetAnotherPerson.name = "Linda"

yetAnotherPerson.friends.push('hf')

console.log(person.friends, person.name, yetAnotherPerson.name);



let factorial = function (num) {
  if (num <=1) {
    return 1
  } else {
    // return num * factorial(num -1)
  }

}

let another = factorial

factorial = null
console.log(another(5));


// console.log(factorial(4));
