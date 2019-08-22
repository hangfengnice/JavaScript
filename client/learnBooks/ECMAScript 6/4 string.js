// string includes() startsWith() endsWith()均返回布尔值

let s = "hello world"

// 这几个方法支持第二个参数(表示从第几个参数开始)
console.log(s.startsWith('hello'))
console.log(s.endsWith("d"));
console.log(s.includes("o"));


// repeat() 重复某个字符 小数向下取整
console.log("hf".repeat(2.6));
// console.log("hf".repeat(-1))  报错
// console.log( "hf".repeat(Infinity)); 报错
// NaN 0~-1 字符串
console.log("hf".repeat(-0.9));
console.log("hf".repeat(NaN));
console.log("hf".repeat("na"));  
console.log("hf".repeat("3"));

// 补全 padStart padEnd
console.log('hangfeng'.padStart(10, " "))
console.log("hangfeng".padEnd(10, " "));

// trimStart() trimEnd()

// mathchAll()
