const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

input.shift();

const sortedArr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(sortedArr[K - 1]);