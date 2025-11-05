const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();

const result = Array.from({ length: 11 }, () => 0);

const fibonacci = (n) => {
  if (n < 0) {
    return 0;
  }

  if (result[n]) {
    return result[n];
  }

  if (n == 0 || n == 1) {
    return 1;
  } else {
    result[n] = fibonacci(n - 1) + fibonacci(n - 2) + fibonacci(n - 3);
    return result[n];
  }
};

for (let i of input) {
  console.log(fibonacci(i));
}