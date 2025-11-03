const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();

const arr = Array.from({ length: 8001 }, () => 0);
const sortedArr = [];

for (let i = 0; i < N; i++) {
  arr[input[i] + 4000] += 1;
}

let modeCount = 0;
let modeArr = [];

for (let i = 0; i < 8001; i++) {
  if (arr[i]) {
    if (arr[i] > modeCount) {
      modeCount = arr[i];
      modeArr = [i - 4000];
    } else if (arr[i] == modeCount) {
      modeArr.push(i - 4000);
    }
    for (let j = 0; j < arr[i]; j++) {
      sortedArr.push(i - 4000);
    }
  }
}

const sum = Math.round(sortedArr.reduce((acc, cur) => acc + cur, 0) / N);
const mid = sortedArr[parseInt(N / 2)];
const range = sortedArr[N - 1] - sortedArr[0];

console.log(sum == "-0" ? 0 : sum);
console.log(mid);
console.log(modeArr.length > 1 ? modeArr[1] : modeArr[0]);
console.log(range);