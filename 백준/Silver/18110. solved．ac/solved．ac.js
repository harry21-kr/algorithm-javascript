const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const N = input.shift();

if (!N) {
  console.log(0);
  return;
}

const sortedArr = input.sort((a, b) => a - b);

const truncation = Math.round(N * 0.15);

const slicedArr = sortedArr.slice(truncation, N - truncation);

const sum = slicedArr.reduce((acc, cur) => acc + cur, 0);

const answer = sum / (N - truncation * 2);

console.log(Math.round(answer));