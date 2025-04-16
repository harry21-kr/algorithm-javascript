const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const cachedArr = new Array(45);

cachedArr[0] = 0;
cachedArr[1] = 1;

const fibonacci = (n) => {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }

  if (cachedArr[n]) {
    return cachedArr[n];
  } else {
    const result = fibonacci(n - 1) + fibonacci(n - 2);
    cachedArr[n] = result;
    return result;
  }
};

fibonacci(45);

console.log(cachedArr[input[0]]);