function create() {
  return () => arguments[0]
}
var test = create(5)

console.log(test())
