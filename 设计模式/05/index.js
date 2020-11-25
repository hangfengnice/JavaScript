class Person {
  say() {
    console.log('say');
  }
}

class Man {
  sex() {
    console.log('man');
  }
}

class Student extends Person, Man {

}

let s = new Student()

s.say()
s.sex()