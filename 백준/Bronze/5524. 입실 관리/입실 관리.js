const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];

input.shift();

for (let i = 0; i < N; i++) {
  console.log(input[i].toLowerCase());
}