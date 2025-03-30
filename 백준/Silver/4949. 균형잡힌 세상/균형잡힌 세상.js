const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

let count = 0;
const answer = [];

while (input[count] !== ".") {
  const targetStr = input[count];
  const stack = [];

  for (let i = 0; i < targetStr.length; i++) {
    if (targetStr[i] === "(" || targetStr[i] === "[") {
      stack.push(targetStr[i]);
    }

    if (targetStr[i] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (targetStr[i] === ")" && stack[stack.length - 1] !== "(") {
      stack.push(targetStr[i]);
    }

    if (targetStr[i] === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else if (targetStr[i] === "]" && stack[stack.length - 1] !== "[") {
      stack.push(targetStr[i]);
    }
  }

  if (stack.length) {
    answer.push("no");
  } else {
    answer.push("yes");
  }

  count++;
}

console.log(answer.join("\n"));