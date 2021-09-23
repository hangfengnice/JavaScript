let node = {
    type: "Identifier",
    name: "foo",
  },
  type = "Literal",
  name = 5;

function outputInfo(value) {
  console.log(value, "value");
  console.log(value === node);
}

outputInfo(({ type, name } = node)); // true

console.log(type); // "Identifier"
console.log(name);
