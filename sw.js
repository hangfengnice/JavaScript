const fn = num => {
  let arr = []

  for (let i = num; i-- > 0;) {
    arr.push(Math.round(Math.random() * 30 + 2))
  }

  arr = [...new Set(arr)]
  
  let len = arr.length
      
  while (num - len > 0) {
    console.log(1);
    arr = [...new Set(arr.concat(fn(num - len)))]
    len = arr.length
  }

  return arr
}
fn(10)
