const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0].split(" ")[0];
const M = +input[0].split(" ")[1];

input.shift();

const maps = new Map();

const nestedArr = [];

for (let i = 0; i < N + M; i++) {
  if (maps.has(input[i])) {
    nestedArr.push(input[i]);
  } else {
    maps.set(input[i], 0);
  }
}

console.log(nestedArr.length);
console.log(nestedArr.sort().join("\n"));