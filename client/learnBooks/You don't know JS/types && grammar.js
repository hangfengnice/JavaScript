// types

{  let arr = [1, 2, 3]
  delete arr[1]
  console.log(arr.length) // 3 
  console.log(arr)  // [1, empty, 3]

  let b = 'foo'
  console.log(isNaN(b))

  let a = -0
  console.log(a.toString())// 0
  console.log(a + "")     // 0
  console.log(String(a))  // 0

  Object.is()
  // polyfill Object.is()
  if(!Object.is) {
    Object.is = function(v1, v2) {
      // 判断是否是 -0
      if (v1 === 0 && v2 === 0) {
        return 0 / v1 === 0 / v2
      }
      // 判断是否是 NaN
      if (v1 !== v1) {
        return v2 !== v2
      }
      return v1 === v2
    }
  }

  let a1 = new Array(3)
  console.log(a1)
  let b1 = [undefined, undefined , undefined]
  console.log(b1)

  function fakeJoin(arr, connector) {
    var str = ''
    for (var i = 0; i < arr.length; i ++) {
      console.log(typeof arr[i]);
      if(i > 0) {
        str += connector
      }
      if( arr[i] !== undefined ) {
        str += arr[i]
        
      }
    }
    return str
  }
  
  console.log(fakeJoin(a1),' -')
  console.log(a1.map((item,i) => i))
  console.log(typeof Function.prototype)
  console.log(RegExp.prototype.toString()) //  /(?:)/

  console.log(JSON.stringify([1, undefined, 2]))

  console.log(Boolean([]))
}

{
  // 其他类型和布尔类型的相等比较
  let a = '42'
  let b = true
  console.log(a == b) // false

  function foo(a = 42, b = a + 1) {
    console.log(
      arguments.length, a, b,
      arguments[0],
      arguments[1]
    )
  }
  foo(10, null)

}
{
  function addAll() {
    var sum = 0
    let len = arguments.length
    for(var  i = 0; i < len; i ++) {
      sum = sum + arguments[i]
    }
    return sum
  }
  let nums = []
  for(var i = 0; i < 100000; i ++) {
    nums.push(i)
  }
  console.log(addAll(1,2,3))
  console.log(addAll.apply(null, nums))
}