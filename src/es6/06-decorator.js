class MyClass {
  @unennumerable
  @readonly
  method() {}

}
function unennumerable(target, name, descriptor) {
  descriptor.writable = false
  return descriptor
}
function readonly(target, name, descriptor) {
  descriptor.enumerable = false
  return descriptor
}

