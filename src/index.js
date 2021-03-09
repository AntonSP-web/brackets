module.exports = function check(input, bracketsConfig) {
  // your solution
  let stack = [];
  let existBrackets = {};
  for(let i = 0; i < bracketsConfig.length; i++) {
    existBrackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }

  stack.push(input[0]);

  for(let j = 1; j < input.length; j++) {
    if(input[j] === existBrackets[stack[stack.length - 1]]) {
      stack.pop();
    } else {
      stack.push(input[j]);
    }
  }
  if (stack.length > 0) {
      return false;
    }
  return true;
}
