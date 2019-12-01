let re = new RegExp("hf", "g")
let str = 'hf great'
console.log(re.exec(str).slice(1)); []
console.log(re.toString()); // /hf/g
console.log(re.toLocaleString());  // /hf/g
console.log(typeof re.toString()); // string
console.log(typeof re.valueOf());  // object
