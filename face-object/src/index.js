class People {
  constructor(name, house) {
    this.name = name;
    this.house = house
    // this.age=age
  }
  // eat(){
  //   console.log(`${this.name} eat sopmething`)
  // }
  // speak(){
  //   console.log(`My name is ${this.name}, age ${this.age}`)
  // }
  saySomething(){

  }
}
// 子类
class A extends People{
  constructor(name,house){
    super(name,house)
    // this.number = number
  }
  saySomething(){
    console.log(`I am A`)
  }
}
class B extends People{
  constructor(name,house){
    super(name, house)
    // this.number = number
  }
  saySomething(){
    console.log(`I am B`)
  }
}

let aHouse = new House('beijing')
let a = new A('a',aHouse)

// let xiaoming = new Student('xiaoming', 10, 'a1')
// xiaoming.study()
// console.log(xiaoming.number)
// xiaoming.eat()
// let xiaohong = new Student('xiaohong', 11, 'a2')
// xiaohong.study()
// xiaohong.speak()

// let zhang = new Person('zhang', 21)

// zhang.eat()
// zhang.speak()

// let wang = new Person('wang',20)

// wang.eat()
// wang.speak()

// class People {
//   name
//   age
//   protected weight
//   constructor(name, age) {
//     this.name = name;
//     this.age=age
//     this.weight = 120 
//   }
//   eat(){
//     console.log(`${this.name} eat sopmething`)
//   }
//   speak(){
//     console.log(`My name is ${this.name}, age ${this.age}`)
//   }
// }
// // 子类
// class Student extends People{
//   number
//   private girlfriend
//   constructor(name, age , number){
//     super(name, age)
//     this.number = number
//     this.girlfriend = 'xiaoli'
//   }
//   study(){
//     console.log(`${this.name} study`)
//   }
//   getweight(){
//     console.log(`weight ${this.weight}`)
//   }
// }
// let xiaoming = new Student('xiaoming', 10, 'a1')
// xiaoming.getweight()
// // xiaoming.study()
// // console.log(xiaoming.number)
// // xiaoming.eat()
// // let xiaohong = new Student('xiaohong', 11, 'a2')
// // xiaohong.study()
// // xiaohong.speak()