let numberArray = [1,[2,4],3]
let wordArray = "[a,[b],c,e]"

let destructuringArray = (values, keys) => {
  let obj = {}
  if (typeof(keys === 'string')) {
    keys = JSON.parse(keys.replace(/\w+/g, '"$&"')).flat().sort()
  }
  values = values.flat(Infinity).sort((a,b) => a-b)

  const iterate = (values, keys) => {
    keys.forEach((item, i) => {
      obj[item] = values[i]
    })
  }
  iterate(values, keys)
  return obj
}

console.log(destructuringArray(numberArray, wordArray));