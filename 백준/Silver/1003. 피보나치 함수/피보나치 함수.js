const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();

const result = Array.from({ length: 41 }, () => [0, 0]);

const fibonacci = (n) => {
  if (result[n][0] || result[n][1]) {
    return result[n];
  }

  if (n == 0) {
    return [1, 0];
  } else if (n == 1) {
    return [0, 1];
  } else {
    const [a, b] = fibonacci(n - 1);
    const [c, d] = fibonacci(n - 2);
    result[n] = [a + c, b + d];
    return result[n];
  }
};

for (let i = 0; i < N; i++) {
  console.log(...fibonacci(input[i]));
}