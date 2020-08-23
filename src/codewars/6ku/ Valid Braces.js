// Valid Braces
function validBraces(braces) {
  let obj = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let s = [];

  for (let t of braces) {
    if (t == "}" || t == ")" || t == "]") {
      if (obj[s.pop()] != t) return false;
    } else {
      s.push(t);
    }
  }
  return s.length == 0;
}

function validBraces(braces) {
  let reg = /\(\)\{\}\[\]/g
  while(reg.test(braces)) braces = braces.replace(reg, '')
  return !braces.length
}
