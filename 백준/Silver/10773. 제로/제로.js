const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const stack = [];

for (let i = 1; i < +input[0] + 1; i++) {
  if (!!+input[i]) {
    stack.push(input[i]);
  }

  if (!!!+input[i]) {
    stack.pop();
  }
}

console.log(stack.reduce((acc, cur) => acc + +cur, 0));