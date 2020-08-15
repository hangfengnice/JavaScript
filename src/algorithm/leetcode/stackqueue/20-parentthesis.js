function isValid(s) {
  let stack = [],
    match = {
      "[": "]",
      "{": "}",
      "(": ")",
    };
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "[" || s[i] == "{" || s[i] == "(") {
      stack.push(s[i]);
    } else {
      if (stack.length == 0) return false;
      let c = stack.pop();
      if (match[c] != s[i]) return false;
    }
  }
  return !stack.length;
}
