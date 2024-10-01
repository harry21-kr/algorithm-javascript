const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

const n = input[0];
const k = input[1];

const calcFactorial = (num) => {
  let fac = 1;
  for (let i = 1; i <= num; i++) {
    fac *= i;
  }
  return fac;
};

console.log(calcFactorial(n) / (calcFactorial(k) * calcFactorial(n - k)));