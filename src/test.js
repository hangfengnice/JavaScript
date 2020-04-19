// var message = ['hell', 'hhh'].join('\n')
// let message = 'numm \n' + 'hhhh'
// console.log(message)

let message =  `hllo\nhhh`
console.log(message)

console.log(String.raw`hello\n;;`)

function raw(literals, ...substitutions) {
  // console.log(object)
  for (let i = 0; i < literals.length; i ++) {
    console.log(literals.raw[i])
  }
}

raw`\n${1}hhh\\${2}2`
