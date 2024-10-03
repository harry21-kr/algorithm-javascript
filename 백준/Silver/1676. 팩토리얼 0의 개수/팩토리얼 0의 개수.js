const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString();

let answer = 0;

const calcFac = (n) => {
  let sum = 1n;
  for (let i = 1n; i <= n; i++) {
    sum *= i;
  }
  return sum;
};

const fac = calcFac(input);

for (let i = 10n; i <= fac; i *= 10n) {
  if (fac % i == 0n) {
    answer++;
  } else {
    break;
  }
}

console.log(answer);