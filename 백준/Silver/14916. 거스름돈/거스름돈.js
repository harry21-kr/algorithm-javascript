const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let coin = [];

for (let i = 0; i <= input[0] / 5; i++) {
  for (let j = 0; j <= input[0] / 2; j++) {
    if (i * 5 + j * 2 === input[0]) {
      coin.push(i + j);
    }
  }
}

console.log(coin.length ? Math.min(...coin) : -1);