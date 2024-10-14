const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString();
const arr = Array.from({ length: +input }, (_, idx) => idx + 1);

const answerArr = [];

while (1) {
  if (!arr.length) {
    break;
  }
  answerArr.push(arr.shift());
  if (arr.length) {
    const item = arr.shift();
    arr.push(item);
  }
}

console.log(...answerArr);