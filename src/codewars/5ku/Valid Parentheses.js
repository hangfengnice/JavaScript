function validParentheses(parens) {
  let reg = /\(\)|\{}|\[]/g
  while(reg.test(parens)) parens = parens.replace(reg, '')
  return !parens.length
}
let ret = validParentheses('(())((()())())')
console.log(ret);
