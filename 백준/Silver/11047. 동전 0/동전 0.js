const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let K = +input[0].split(" ")[1];

input.shift();

const coins = input.map(Number).sort((a, b) => b - a);

let count = 0;

for (let coin of coins) {
  while (K >= coin) {
    K -= coin;
    count++;
  }
}

console.log(count);