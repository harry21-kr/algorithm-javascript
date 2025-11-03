const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

const stack = [];
const answer = [];

let count = 1;

for (let i of input) {
  while (!stack.includes(i)) {
    stack.push(count);
    answer.push("+");
    count++;
  }
  while (stack[stack.length - 1] == i) {
    stack.pop();
    answer.push("-");
  }
}

console.log(stack.length ? "NO" : answer.join("\n"));