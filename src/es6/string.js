let html = `
	<span>1<span>
	<span>2<span>
		<span>3<span>
`;
function stripIndents(template, ...expression) {
  let result = template.reduce((prev, next, i) => {
    var value = expression[i - 1]
    return prev + value + next
  })

}

// console.log(object);
stripIndents`
  <span>1<span>
  <span>2<span>
    <span>3<span>
`;

var obj = {
  toString() {
    return 'abc'
  }
}

var s = Symbol(obj)
console.log(s);
console.log(s );
console.log(String(s), s.toString());



