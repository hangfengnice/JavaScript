let instance = new Boolean("hello")
console.log(typeof instance); // object
console.log(instance.valueOf(), instance.toString());  // true  "true"
console.log(typeof instance.valueOf()); // boolean
console.log(typeof instance.toString()); // string
