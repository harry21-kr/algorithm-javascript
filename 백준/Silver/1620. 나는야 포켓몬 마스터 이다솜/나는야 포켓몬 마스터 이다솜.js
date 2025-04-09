const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

input.shift();

const map = new Map();

for (let i = 0; i < N; i++) {
  map.set(input[i], `${i + 1}`);
}

for (let j = N; j < input.length; j++) {
  if (+input[j]) {
    console.log(input[+input[j] - 1]);
  } else {
    console.log(map.get(input[j]));
  }
}