const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const numArr = [0, 0, 0];

const transform = (num) => {
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  else if (num % 3 === 0 && num % 5 !== 0) return "Fizz";
  else if (num % 3 !== 0 && num % 5 === 0) return "Buzz";
  else return num;
};

input.forEach((v, idx) => {
  if (+v) {
    numArr.splice(idx, 1, +v);
  }
});

numArr.forEach((v, idx) => {
  if (v) {
    numArr.splice(idx + 1, 1, v + 1);
  }
});

console.log(transform(numArr[3]));