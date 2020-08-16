function evaluate(tokens) {
  let stack = [];
  let num;
  for (let char of tokens) {
    switch (char) {
      case "+":
        stack.push(stack.pop() + stack.pop());
        break;
      case "-":
        num = stack.pop();
        stack.push(stack.pop() - num);
        break;
      case "*":
        stack.push(stack.pop() * stack.pop());
        break;
      case "/":
        num = stack.pop();
        stack.push(parseInt(stack.pop() / num));
        break;
      default:
        stack.push(parseInt(char, 10));
    }
  }
  return stack.pop();
}
