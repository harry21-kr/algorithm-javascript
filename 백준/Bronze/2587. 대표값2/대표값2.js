const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);

console.log(
  input.reduce((acc, cur) => acc + cur, 0) / input.length +
    "\n" +
    input[Math.floor(input.length / 2)]
);