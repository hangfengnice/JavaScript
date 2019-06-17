
function fn(){
  console.log(this.name)
}

const obj = {
  name: 'hangfeng',
  sayName: fn
}

const obj1 = {
  name: "yingying"
}
fn();
obj.sayName()

