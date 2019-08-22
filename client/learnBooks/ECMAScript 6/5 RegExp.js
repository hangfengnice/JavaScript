// flags 返回正则表达式的修饰符
console.log(/abc/ig.flags)

// s 修饰符 dotAll 
console.log(/foo.bar/.test("foo\nbar")); // false
console.log(/foo.bar/s.test("foo\nbar")); // true