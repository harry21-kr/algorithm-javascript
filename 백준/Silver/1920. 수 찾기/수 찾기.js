const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const N = input[1]
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);

const M = input[3].split(" ").map((v) => +v);

M.forEach((v) => {
  let low = 0;
  let high = N.length - 1;

  while (1) {
    let mid = parseInt(low + (high - low) / 2);

    if (N[mid] === v) {
      console.log(1);
      break;
    }

    if (low > high) {
      console.log(0);
      break;
    }

    if (N[mid] > v) {
      high = mid - 1;
    }

    if (N[mid] < v) {
      low = mid + 1;
    }
  }
});